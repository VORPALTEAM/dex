import React, { useState } from 'react'
import { Token } from 'pickleswap-sdk2'
import { ButtonMenu, ButtonMenuItem, ModalBody } from 'pickleswap-uikit'
import styled from 'styled-components'
import { TokenList } from '@uniswap/token-lists'
import { useTranslation } from 'contexts/Localization'
import ManageLists from './ManageLists'
import ManageTokens from './ManageTokens'
import { CurrencyModalView } from './types'

const StyledButtonMenu = styled(ButtonMenu)`
  width: 322px;
  background: #ededed;
  box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #ffffff;
`

const StyledButtonMenuItem = styled(ButtonMenuItem)`
  border-radius: 16px;
  text-transform: uppercase;
  background-color: ${({ isActive }) => {
    return isActive ? '#352F44' : 'transparent'
  }};

  color: ${({ isActive }) => {
    return isActive ? '#F1F6F9' : '#2A2338'
  }};
`

export default function Manage({
  setModalView,
  setImportList,
  setImportToken,
  setListUrl,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportToken: (token: Token) => void
  setImportList: (list: TokenList) => void
  setListUrl: (url: string) => void
}) {
  const [showLists, setShowLists] = useState(true)

  const { t } = useTranslation()

  return (
    <ModalBody style={{ width: '400px', display: 'flex', alignItems: 'center' }}>
      <StyledButtonMenu
        activeIndex={showLists ? 0 : 1}
        onItemClick={() => setShowLists((prev) => !prev)}
        scale="sm"
        variant="subtle"
        mb="20px"
      >
        <StyledButtonMenuItem width="50%">{t('Lists')}</StyledButtonMenuItem>
        <StyledButtonMenuItem width="50%">{t('Tokens')}</StyledButtonMenuItem>
      </StyledButtonMenu>
      {showLists ? (
        <ManageLists setModalView={setModalView} setImportList={setImportList} setListUrl={setListUrl} />
      ) : (
        <ManageTokens setModalView={setModalView} setImportToken={setImportToken} />
      )}
    </ModalBody>
  )
}
