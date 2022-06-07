import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button, Modal, Heading } from 'pickleswap-uikit'
import { ModalActions, ModalInput } from 'components/Modal'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useToast from 'hooks/useToast'
import { logError } from 'utils/sentry'

interface WithdrawModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const StyledModal = styled(Modal)`
  ${Heading} {
    font-family: 'RoundsBlack';
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt1};
  color: ${({ theme }) => theme.colors.contrast};
  box-shadow: none;
  border-radius: 6px;
`

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, max, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const { toastSuccess, toastError } = useToast()
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const valNumber = new BigNumber(val)
  const fullBalanceNumber = new BigNumber(fullBalance)

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.validity.valid) {
        setVal(e.currentTarget.value.replace(/,/g, '.'))
      }
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <StyledModal title={t('Unstake LP tokens')} onDismiss={onDismiss}>
      <ModalInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
        inputTitle={t('Unstake')}
      />
      <ModalActions>
        <StyledButton onClick={onDismiss} width="100%" disabled={pendingTx}>
          {t('Cancel')}
        </StyledButton>
        <StyledButton
          disabled={pendingTx || !valNumber.isFinite() || valNumber.eq(0) || valNumber.gt(fullBalanceNumber)}
          onClick={async () => {
            setPendingTx(true)
            try {
              await onConfirm(val)
              toastSuccess(t('Unstaked!'), t('Your earnings have also been harvested to your wallet'))
              onDismiss()
            } catch (e) {
              logError(e)
              toastError(
                t('Error'),
                t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
              )
            } finally {
              setPendingTx(false)
            }
          }}
          width="100%"
        >
          {pendingTx ? t('Confirming') : t('Confirm')}
        </StyledButton>
      </ModalActions>
    </StyledModal>
  )
}

export default WithdrawModal
