import React, { useRef, RefObject, useCallback, useState, useMemo } from 'react'
import { Token } from 'pickleswap-sdk'
import { Text, Button, CloseIcon, IconButton, LinkExternal, Input, Link } from 'vorpaltesttoolkit'
import styled from 'styled-components'
import Row, { RowBetween, RowFixed } from 'components/Layout/Row'
import { useToken } from 'hooks/Tokens'
import { useRemoveUserAddedToken } from 'state/user/hooks'
import useUserAddedTokens from 'state/user/hooks/useUserAddedTokens'
import { CurrencyLogo } from 'components/Logo'
import { getBscScanLink, isAddress } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import Column, { AutoColumn } from '../Layout/Column'
import ImportRow from './ImportRow'
import { CurrencyModalView } from './types'

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  padding-bottom: 60px;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledInput = styled(Input)`
  width: 322px;
  height: 40px;
  color: #dbd8e3;
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px 1px #d3cee0, inset 0px 0px 5px 2px rgb(0 0 0 / 15%);
  border-radius: 6px;
  font-size: 12px;
`

export default function ManageTokens({
  setModalView,
  setImportToken,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportToken: (token: Token) => void
}) {
  const { chainId } = useActiveWeb3React()

  const { t } = useTranslation()

  const [searchQuery, setSearchQuery] = useState<string>('')

  // manage focus on modal show
  const inputRef = useRef<HTMLInputElement>()
  const handleInput = useCallback((event) => {
    const input = event.target.value
    const checksummedInput = isAddress(input)
    setSearchQuery(checksummedInput || input)
  }, [])

  // if they input an address, use it
  const searchToken = useToken(searchQuery)

  // all tokens for local list
  const userAddedTokens: Token[] = useUserAddedTokens()
  const removeToken = useRemoveUserAddedToken()

  const handleRemoveAll = useCallback(() => {
    if (chainId && userAddedTokens) {
      userAddedTokens.map((token) => {
        return removeToken(chainId, token.address)
      })
    }
  }, [removeToken, userAddedTokens, chainId])

  const tokenList = useMemo(() => {
    return (
      chainId &&
      userAddedTokens.map((token) => (
        <RowBetween key={token.address} width="100%">
          <RowFixed>
            <CurrencyLogo currency={token} size="20px" />
            <Link external href={getBscScanLink(token.address, 'address', chainId)} color="textSubtle" ml="10px">
              {token.symbol}
            </Link>
          </RowFixed>
          <RowFixed>
            <IconButton variant="text" onClick={() => removeToken(chainId, token.address)}>
              <CloseIcon />
            </IconButton>
            <LinkExternal href={getBscScanLink(token.address, 'address', chainId)} />
          </RowFixed>
        </RowBetween>
      ))
    )
  }, [userAddedTokens, chainId, removeToken])

  const isAddressValid = searchQuery === '' || isAddress(searchQuery)

  return (
    <Wrapper>
      <Column style={{ width: '100%', flex: '1 1' }}>
        <AutoColumn gap="14px">
          <Row justify="center">
            <StyledInput
              id="token-search-input"
              scale="lg"
              placeholder="0x0000"
              value={searchQuery}
              autoComplete="off"
              ref={inputRef as RefObject<HTMLInputElement>}
              onChange={handleInput}
              isWarning={!isAddressValid}
            />
          </Row>
          {!isAddressValid && (
            <Text fontSize="12px" style={{ width: '322px', margin: 'auto' }} color="failure">
              {t('Enter valid token address')}
            </Text>
          )}
          {searchToken && (
            <ImportRow
              token={searchToken}
              showImportView={() => setModalView(CurrencyModalView.importToken)}
              setImportToken={setImportToken}
              style={{ height: 'fit-content' }}
            />
          )}
        </AutoColumn>
        {tokenList}
        <Footer style={{ paddingLeft: 40 }}>
          <Text fontFamily="RobotoBold" fontSize="12px" color="text">
            {userAddedTokens?.length} {userAddedTokens.length === 1 ? t('Custom Token') : t('Custom Tokens')}
          </Text>
          {userAddedTokens.length > 0 && (
            <Button variant="tertiary" onClick={handleRemoveAll}>
              {t('Clear all')}
            </Button>
          )}
        </Footer>
      </Column>
    </Wrapper>
  )
}
