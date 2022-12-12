import React, { useCallback, useState } from 'react'
import { Currency, Token } from 'pickleswap-sdk'
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBackButton,
  ModalCloseButton,
  ModalBody,
  InjectedModalProps,
  Heading,
  Button,
} from 'vorpaltesttoolkit'
import styled from 'styled-components'
import usePrevious from 'hooks/usePreviousValue'
import { TokenList } from '@uniswap/token-lists'
import { useTranslation } from 'contexts/Localization'
import CurrencySearch from './CurrencySearch'
import ImportToken from './ImportToken'
import Manage from './Manage'
import ImportList from './ImportList'
import { CurrencyModalView } from './types'

const Footer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  text-align: center;
`

const StyledButton = styled(Button)`
  font-family: 'RobotoBold';
  color: #2a2338;
  background-color: transparent;
  box-shadow: none;
  text-transform: uppercase;
`

const StyledModalButton = styled(ModalBackButton)``

const StyledModalCloseButtonContainer = styled.div`
  & > button {
    width: 20px;
  }
`

const StyledModalCloseButton = styled(ModalCloseButton)``

const StyledModalTitle = styled(ModalTitle)`
  justify-content: center;
  padding-top: 45px;
`

const StyledModalManageTitle = styled(ModalTitle)`
  justify-content: flex-start;
  font-family: 'RoundsBlack';

  & > button {
    width: 13px;
    margin-right: 20px;
    padding-top: 10px;
  }
`

const StyledModalHeader = styled(ModalHeader)`
  width: 475px;
  margin: auto;
  flex-direction: row;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.text}`};
`

const StyledModalManageHeader = styled(ModalHeader)`
  width: 360px;
  border-bottom: none;
  /* padding: 12px 24px 0px 45px; */
  flex-direction: row;
  margin: auto;
`

const StyledModalBody = styled(ModalBody)`
  width: 474px;
  margin: auto;
  padding: 10px 0px 24px 0px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface CurrencySearchModalProps extends InjectedModalProps {
  selectedCurrency?: Currency | null
  onCurrencySelect: (currency: Currency) => void
  otherSelectedCurrency?: Currency | null
  showCommonBases?: boolean
}

export default function CurrencySearchModal({
  onDismiss = () => null,
  onCurrencySelect,
  selectedCurrency,
  otherSelectedCurrency,
  showCommonBases = false,
}: CurrencySearchModalProps) {
  const [modalView, setModalView] = useState<CurrencyModalView>(CurrencyModalView.search)

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      onDismiss()
      onCurrencySelect(currency)
    },
    [onDismiss, onCurrencySelect],
  )

  // for token import view
  const prevView = usePrevious(modalView)

  // used for import token flow
  const [importToken, setImportToken] = useState<Token | undefined>()

  // used for import list
  const [importList, setImportList] = useState<TokenList | undefined>()
  const [listURL, setListUrl] = useState<string | undefined>()

  const { t } = useTranslation()

  const config = {
    [CurrencyModalView.search]: { title: t('Select a Token'), onBack: undefined },
    [CurrencyModalView.manage]: { title: t('Manage'), onBack: () => setModalView(CurrencyModalView.search) },
    [CurrencyModalView.importToken]: {
      title: t('Import Tokens'),
      onBack: () =>
        setModalView(prevView && prevView !== CurrencyModalView.importToken ? prevView : CurrencyModalView.search),
    },
    [CurrencyModalView.importList]: { title: t('Import List'), onBack: () => setModalView(CurrencyModalView.search) },
  }

  const StyledModalContainer = styled(ModalContainer)`
    max-width: ${modalView === CurrencyModalView.manage ? '400px' : '554px'};
    width: 100%;
    border-radius: 40px;
  `

  return (
    <StyledModalContainer minWidth="320px">
      {modalView === CurrencyModalView.manage ? (
        <StyledModalManageHeader>
          <StyledModalManageTitle>
            {config[modalView].onBack && <StyledModalButton onBack={config[modalView].onBack} />}
            <Heading fontSize="18px" fontFamily="RoundsBlack">
              {config[modalView].title}
            </Heading>
          </StyledModalManageTitle>
          <StyledModalCloseButtonContainer>
            <StyledModalCloseButton onDismiss={onDismiss} />
          </StyledModalCloseButtonContainer>
        </StyledModalManageHeader>
      ) : (
        <StyledModalHeader>
          <StyledModalTitle>
            {config[modalView].onBack && <ModalBackButton onBack={config[modalView].onBack} />}
            <Heading fontSize="18px" fontFamily="RoundsBlack">
              {config[modalView].title}
            </Heading>
          </StyledModalTitle>
          <StyledModalCloseButtonContainer>
            <StyledModalCloseButton onDismiss={onDismiss} />
          </StyledModalCloseButtonContainer>
        </StyledModalHeader>
      )}
      <StyledModalBody>
        {modalView === CurrencyModalView.search ? (
          <CurrencySearch
            onCurrencySelect={handleCurrencySelect}
            selectedCurrency={selectedCurrency}
            otherSelectedCurrency={otherSelectedCurrency}
            showCommonBases={showCommonBases}
            showImportView={() => setModalView(CurrencyModalView.importToken)}
            setImportToken={setImportToken}
          />
        ) : modalView === CurrencyModalView.importToken && importToken ? (
          <ImportToken tokens={[importToken]} handleCurrencySelect={handleCurrencySelect} />
        ) : modalView === CurrencyModalView.importList && importList && listURL ? (
          <ImportList list={importList} listURL={listURL} onImport={() => setModalView(CurrencyModalView.manage)} />
        ) : modalView === CurrencyModalView.manage ? (
          <Manage
            setModalView={setModalView}
            setImportToken={setImportToken}
            setImportList={setImportList}
            setListUrl={setListUrl}
          />
        ) : (
          ''
        )}
        {modalView === CurrencyModalView.search && (
          <Footer>
            <StyledButton
              scale="sm"
              variant="primary"
              onClick={() => setModalView(CurrencyModalView.manage)}
              className="list-token-manage-button"
            >
              {t('Manage Tokens')}
            </StyledButton>
          </Footer>
        )}
      </StyledModalBody>
    </StyledModalContainer>
  )
}
