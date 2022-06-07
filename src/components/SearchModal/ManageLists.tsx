import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { Button, Text, CheckmarkIcon, CustomCogIcon, Input, Toggle, LinkExternal, useTooltip } from 'pickleswap-uikit'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { TokenList, Version } from '@uniswap/token-lists'
import Card from 'components/Card'
import { UNSUPPORTED_LIST_URLS } from 'config/constants/lists'
import { parseENSAddress } from 'utils/ENS/parseENSAddress'
import { useTranslation } from 'contexts/Localization'
import useFetchListCallback from '../../hooks/useFetchListCallback'

import { AppDispatch, AppState } from '../../state'
import { acceptListUpdate, removeList, disableList, enableList } from '../../state/lists/actions'
import { useIsListActive, useAllLists, useActiveListUrls } from '../../state/lists/hooks'
import uriToHttp from '../../utils/uriToHttp'

import Column, { AutoColumn } from '../Layout/Column'
import { ListLogo } from '../Logo'
import Row, { RowFixed, RowBetween } from '../Layout/Row'
import { CurrencyModalView } from './types'

function listVersionLabel(version: Version): string {
  return `v${version.major}.${version.minor}.${version.patch}`
}

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;
`

const StyledLinkExternal = styled(LinkExternal)`
  color: #4da1a3;
  font-size: 14px;
`

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.colors.backgroundAlt1};
  border-radius: 6px;
`

const RowWrapper = styled(Row)<{ active: boolean; isLast: boolean }>`
  // background-color: ${({ active, theme }) => (active ? `${theme.colors.success}19` : 'transparent')};
  // border: solid 1px;
  // border-color: ${({ active, theme }) => (active ? theme.colors.success : theme.colors.tertiary)};
  border-bottom: ${({ isLast }) => (isLast ? 'none' : 'solid 1px rgba(42, 35, 56, 0.2)')};
  padding-bottom: 14px;
  transition: 200ms;
  align-items: center;
  // border-radius: 20px;
`

const StyledInput = styled(Input)`
  width: 325px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 12px;
  box-shadow: 0px 0px 5px 1px #d3cee0, inset 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
`

function listUrlRowHTMLId(listUrl: string) {
  return `list-row-${listUrl.replace(/\./g, '-')}`
}

const ListRow = memo(function ListRow({ listUrl, isLast }: { listUrl: string; isLast: boolean }) {
  const listsByUrl = useSelector<AppState, AppState['lists']['byUrl']>((state) => state.lists.byUrl)
  const dispatch = useDispatch<AppDispatch>()
  const { current: list, pendingUpdate: pending } = listsByUrl[listUrl]

  const isActive = useIsListActive(listUrl)

  const { t } = useTranslation()

  const handleAcceptListUpdate = useCallback(() => {
    if (!pending) return
    dispatch(acceptListUpdate(listUrl))
  }, [dispatch, listUrl, pending])

  const handleRemoveList = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Please confirm you would like to remove this list')) {
      dispatch(removeList(listUrl))
    }
  }, [dispatch, listUrl])

  const handleEnableList = useCallback(() => {
    dispatch(enableList(listUrl))
  }, [dispatch, listUrl])

  const handleDisableList = useCallback(() => {
    dispatch(disableList(listUrl))
  }, [dispatch, listUrl])

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <div>
      <Text fontSize="14px">{list && listVersionLabel(list.version)}</Text>
      <StyledLinkExternal external href={`https://tokenlists.org/token-list?url=${listUrl}`}>
        {t('See')}
      </StyledLinkExternal>
      <StyledButton
        variant="danger"
        scale="xs"
        onClick={handleRemoveList}
        disabled={Object.keys(listsByUrl).length === 1}
      >
        {t('Remove')}
      </StyledButton>
      {pending && (
        <StyledButton variant="text" onClick={handleAcceptListUpdate} style={{ fontSize: '12px' }}>
          {t('Update list')}
        </StyledButton>
      )}
    </div>,
    { placement: 'right-end', trigger: 'click' },
  )

  if (!list) return null

  return (
    <RowWrapper active={isActive} key={listUrl} id={listUrlRowHTMLId(listUrl)} isLast={isLast}>
      {tooltipVisible && tooltip}
      {list.logoURI ? (
        <ListLogo size="36px" style={{ marginRight: '1rem' }} logoURI={list.logoURI} alt={`${list.name} list logo`} />
      ) : (
        <div style={{ width: '24px', height: '24px', marginRight: '1rem' }} />
      )}
      <Column style={{ flex: '1' }}>
        <Row>
          <Text fontFamily="RobotoBold" bold>
            {list.name}
          </Text>
        </Row>
        <RowFixed mt="4px">
          <Text fontSize="12px" mr="6px" textTransform="lowercase">
            {list.tokens.length} {t('Tokens')}
          </Text>
          <span ref={targetRef}>
            <CustomCogIcon color="text" width="12px" />
          </span>
        </RowFixed>
      </Column>
      <Toggle
        scale="md"
        defaultColor="contrast"
        checkedColor="backgroundAlt1"
        checked={isActive}
        onChange={() => {
          if (isActive) {
            handleDisableList()
          } else {
            handleEnableList()
          }
        }}
      />
    </RowWrapper>
  )
})

const ListContainer = styled.div`
  padding: 1rem 0;
  height: 100%;
`

function ManageLists({
  setModalView,
  setImportList,
  setListUrl,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportList: (list: TokenList) => void
  setListUrl: (url: string) => void
}) {
  const [listUrlInput, setListUrlInput] = useState<string>('')

  const { t } = useTranslation()

  const lists = useAllLists()

  // sort by active but only if not visible
  const activeListUrls = useActiveListUrls()
  const [activeCopy, setActiveCopy] = useState<string[] | undefined>()
  useEffect(() => {
    if (!activeCopy && activeListUrls) {
      setActiveCopy(activeListUrls)
    }
  }, [activeCopy, activeListUrls])

  const handleInput = useCallback((e) => {
    setListUrlInput(e.target.value)
  }, [])

  const fetchList = useFetchListCallback()

  const validUrl: boolean = useMemo(() => {
    return uriToHttp(listUrlInput).length > 0 || Boolean(parseENSAddress(listUrlInput))
  }, [listUrlInput])

  const sortedLists = useMemo(() => {
    const listUrls = Object.keys(lists)
    return listUrls
      .filter((listUrl) => {
        // only show loaded lists, hide unsupported lists
        return Boolean(lists[listUrl].current) && !UNSUPPORTED_LIST_URLS.includes(listUrl)
      })
      .sort((u1, u2) => {
        const { current: l1 } = lists[u1]
        const { current: l2 } = lists[u2]

        // first filter on active lists
        if (activeCopy?.includes(u1) && !activeCopy?.includes(u2)) {
          return -1
        }
        if (!activeCopy?.includes(u1) && activeCopy?.includes(u2)) {
          return 1
        }

        if (l1 && l2) {
          return l1.name.toLowerCase() < l2.name.toLowerCase()
            ? -1
            : l1.name.toLowerCase() === l2.name.toLowerCase()
            ? 0
            : 1
        }
        if (l1) return -1
        if (l2) return 1
        return 0
      })
  }, [lists, activeCopy])

  // temporary fetched list for import flow
  const [tempList, setTempList] = useState<TokenList>()
  const [addError, setAddError] = useState<string | undefined>()

  useEffect(() => {
    async function fetchTempList() {
      fetchList(listUrlInput, false)
        .then((list) => setTempList(list))
        .catch(() => setAddError('Error importing list'))
    }
    // if valid url, fetch details for card
    if (validUrl) {
      fetchTempList()
    } else {
      setTempList(undefined)
      if (listUrlInput !== '') {
        setAddError('Enter valid list location')
      }
    }

    // reset error
    if (listUrlInput === '') {
      setAddError(undefined)
    }
  }, [fetchList, listUrlInput, validUrl])

  // check if list is already imported
  const isImported = Object.keys(lists).includes(listUrlInput)

  // set list values and have parent modal switch to import list view
  const handleImport = useCallback(() => {
    if (!tempList) return
    setImportList(tempList)
    setModalView(CurrencyModalView.importList)
    setListUrl(listUrlInput)
  }, [listUrlInput, setImportList, setListUrl, setModalView, tempList])

  return (
    <Wrapper style={{ display: 'flex', alignItems: 'center' }}>
      <AutoColumn gap="10px">
        <Row>
          <StyledInput
            id="list-add-input"
            scale="lg"
            placeholder={t('https:// or ipfs:// or ENS name')}
            value={listUrlInput}
            onChange={handleInput}
          />
        </Row>
        {addError ? (
          <Text color="failure" fontSize="12px" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {addError}
          </Text>
        ) : null}
      </AutoColumn>
      {tempList && (
        <AutoColumn style={{ paddingTop: 0 }}>
          <Card padding="12px 20px">
            <RowBetween>
              <RowFixed>
                {tempList.logoURI && <ListLogo logoURI={tempList.logoURI} size="40px" />}
                <AutoColumn gap="4px" style={{ marginLeft: '20px' }}>
                  <Text bold>{tempList.name}</Text>
                  <Text color="textSubtle" small textTransform="lowercase">
                    {tempList.tokens.length} {t('Tokens')}
                  </Text>
                </AutoColumn>
              </RowFixed>
              {isImported ? (
                <RowFixed>
                  <CheckmarkIcon width="16px" mr="10px" />
                  <Text>{t('Loaded')}</Text>
                </RowFixed>
              ) : (
                <Button width="fit-content" onClick={handleImport}>
                  {t('Import')}
                </Button>
              )}
            </RowBetween>
          </Card>
        </AutoColumn>
      )}
      <ListContainer style={{ width: '325px', padding: '10px 0px' }}>
        <AutoColumn gap="md">
          {sortedLists.map((listUrl, index) => (
            <ListRow isLast={sortedLists.length === index + 1} key={listUrl} listUrl={listUrl} />
          ))}
        </AutoColumn>
      </ListContainer>
    </Wrapper>
  )
}

export default ManageLists
