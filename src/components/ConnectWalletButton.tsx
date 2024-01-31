import React from 'react'
import { Button, useWalletModal } from 'vorpaltesttoolkit'
import styled from'styled-components'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  const ConnectStyledButton = styled(Button)`

     @media screen and (max-width: 768px) {
       font-size: 12px;
       width: 120px;
     }
  `

  return (
    <ConnectStyledButton onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </ConnectStyledButton>
  )
}

export default ConnectWalletButton
