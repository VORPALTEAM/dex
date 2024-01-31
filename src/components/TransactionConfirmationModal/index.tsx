import React, { useCallback } from 'react'
import { ChainId, Currency, Token } from 'pickleswap-sdk'
import styled from 'styled-components'
import {
  Button,
  Text,
  ErrorIcon,
  ArrowUpIcon,
  MetamaskIcon,
  Flex,
  Box,
  Link,
  Spinner,
  // Modal,
  InjectedModalProps,
  CloseIcon,
  Heading,
  IconButton,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from 'vorpaltesttoolkit'
import { registerToken } from 'utils/wallet'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { wrappedCurrency } from 'utils/wrappedCurrency'
import { RowFixed } from '../Layout/Row'
import { AutoColumn, ColumnCenter } from '../Layout/Column'
import { getBscScanLink } from '../../utils'

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
`

const StyledWrapper = styled.div`
  width: 100%;
`

const Section = styled(AutoColumn)`
  padding: 24px;
`

const ConfirmedIcon = styled(ColumnCenter)`
  align-items: center;
  padding: 24px 0;
`

const StyledButton = styled(Button)`
  width: 340px;
  height: 70px;
  background: #4da1a3;
  border-radius: 6px;
`

const StyledAddMetamskButton = styled(Button)`
  width: 340px;
  height: 40px;
  background: #DBD8E3;
  border-radius: 6px;
  color: #4da1a3;
`

function ConfirmationPendingContent({ pendingText }: { pendingText: string }) {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <ConfirmedIcon>
        <Spinner />
      </ConfirmedIcon>
      <AutoColumn gap="12px" justify="center">
        <Text fontSize="20px">{t('Waiting For Confirmation')}</Text>
        <AutoColumn gap="12px" justify="center">
          <Text bold small textAlign="center">
            {pendingText}
          </Text>
        </AutoColumn>
        <Text small color="text" textAlign="center">
          {t('Confirm this transaction in your wallet')}
        </Text>
      </AutoColumn>
    </Wrapper>
  )
}

function TransactionSubmittedContent({
  onDismiss,
  chainId,
  hash,
  currencyToAdd,
}: {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  currencyToAdd?: Currency | undefined
}) {
  const { library } = useActiveWeb3React()

  const { t } = useTranslation()

  const token: Token | undefined = wrappedCurrency(currencyToAdd, chainId)

  return (
    <StyledWrapper>
      <Section>
        <ConfirmedIcon>
          <ArrowUpIcon strokeWidth={0.5} width="90px" color="primary" />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <Text fontSize="20px">{t('Transaction Submitted')}</Text>
          {chainId && hash && (
            <Link color="#4DA1A3" external small href={getBscScanLink(hash, 'transaction', chainId)}>
              {t('View on BscScan')}
            </Link>
          )}
          {currencyToAdd && library?.provider?.isMetaMask && (
            <StyledAddMetamskButton
              variant="tertiary"
              mt="12px"
              width="fit-content"
              onClick={() => registerToken(token.address, token.symbol, token.decimals)}
            >
              <RowFixed>
                {t('Add %asset% to Metamask', { asset: currencyToAdd.symbol })}
                <MetamaskIcon width="16px" ml="6px" />
              </RowFixed>
            </StyledAddMetamskButton>
          )}
          <StyledButton onClick={onDismiss} mt="20px">
            {t('Close')}
          </StyledButton>
        </AutoColumn>
      </Section>
    </StyledWrapper>
  )
}

export function ConfirmationModalContent({
  bottomContent,
  topContent,
}: {
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}) {
  return (
    <StyledWrapper>
      <Box>{topContent()}</Box>
      <Box>{bottomContent()}</Box>
    </StyledWrapper>
  )
}

export function TransactionErrorContent({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <AutoColumn justify="center">
        <ErrorIcon color="failure" width="125px" />
        <Text color="failure" style={{ textAlign: 'center', width: '85%' }}>
          {message}
        </Text>
      </AutoColumn>

      <Flex justifyContent="center" pt="50px" pb="50px">
        <StyledButton onClick={onDismiss}>{t('Dismiss')}</StyledButton>
      </Flex>
    </Wrapper>
  )
}

interface ConfirmationModalProps {
  title: string
  customOnDismiss?: () => void
  hash: string | undefined
  content: () => React.ReactNode
  attemptingTxn: boolean
  pendingText: string
  currencyToAdd?: Currency | undefined
}

const TransactionConfirmationModal: React.FC<InjectedModalProps & ConfirmationModalProps> = ({
  title,
  onDismiss,
  customOnDismiss,
  attemptingTxn,
  hash,
  pendingText,
  content,
  currencyToAdd,
}) => {
  const { chainId } = useActiveWeb3React()
  // const { t } = useTranslation()

  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss()
    }
    onDismiss()
  }, [customOnDismiss, onDismiss])

  if (!chainId) return null

  return (
    <ModalContainer minWidth="320px" style={{ width: '554px' }}>
      <ModalHeader style={{ flexDirection: 'row', justifyContent: 'center', width: 475, margin: 'auto' }}>
        <ModalTitle style={{ justifyContent: 'flex-start' }}>
          <Heading>{title}</Heading>
        </ModalTitle>
        <IconButton style={{ width: 10 }} variant="text" onClick={handleDismiss}>
          <CloseIcon width="24px" color="text" />
        </IconButton>
      </ModalHeader>
      <ModalBody style={{ padding: '30px 0px 4px 0px', width: 475, margin: 'auto', overflow: 'initial' }}>
        {attemptingTxn ? (
          <ConfirmationPendingContent pendingText={pendingText} />
        ) : hash ? (
          <TransactionSubmittedContent
            chainId={chainId}
            hash={hash}
            onDismiss={onDismiss}
            currencyToAdd={currencyToAdd}
          />
        ) : (
          content()
        )}
      </ModalBody>
    </ModalContainer>
  )
}

export default TransactionConfirmationModal
