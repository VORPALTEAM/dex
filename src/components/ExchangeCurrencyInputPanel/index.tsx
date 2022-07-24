import React from 'react'
import { Currency, Pair } from 'pickleswap-sdk2'
import { Button, ChevronDownIcon, Text, Flex, Box, darkColors, useModal } from 'vorpaltesttoolkit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'

// import { RowBetween } from '../Layout/Row'
import { ColumnCenter } from '../Layout/Column'
import { Input as NumericalInput } from './NumericalInput'

const InputRow = styled.div<{ selected: boolean }>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // gap: 27px;
`

// const StyledBox = styled(Box)`
//   width: 475px;
//   height: 110px;
// `

const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  width: 160px;
  padding: 0 0.5rem;
`

const StyledButton = styled(Button)`
  border: none;
  color: #4da1a3;
  font-family: 'RobotoBold';
`

const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0px 0px 0px 26px;
`
const InputPanel = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: '20px';
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  z-index: 1;
`
const Container = styled.div`
  display: flex;
  width: 475px;
  height: 110px;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${darkColors.dropdownDeep};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const { t } = useTranslation()

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (
    <Box id={id}>
      {/* <Flex mb="6px" alignItems="center" justifyContent="space-between">
        {account && (
          <Text onClick={onMax} color="textSubtle" fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
            {!hideBalance && !!currency
              ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
              : ' -'}
          </Text>
        )}
      </Flex> */}
      <InputPanel>
        <Container>
          <LabelRow>
            <ColumnCenter>
              <Text fontSize="12px" color="textSubtle">
                {label.toUpperCase()}
              </Text>
              <NumericalInput
                className="token-amount-input"
                style={{ width: '100%', textAlign: 'start', color: darkColors.textSubtle }}
                value={value}
                onUserInput={(val) => {
                  onUserInput(val)
                }}
              />
            </ColumnCenter>
          </LabelRow>
          <InputRow selected={disableCurrencySelect}>
            <Flex mb="6px" alignItems="center" justifyContent="space-between">
              {account && (
                <Text
                  onClick={onMax}
                  color="textSubtle"
                  fontSize="14px"
                  style={{ display: 'inline', cursor: 'pointer' }}
                >
                  {!hideBalance && !!currency
                    ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
                    : ' -'}
                </Text>
              )}
            </Flex>
            <RowContainer>
              {account && currency && showMaxButton && label !== 'To' && (
                <StyledButton bold onClick={onMax} scale="xs" variant="secondary">
                  MAX
                </StyledButton>
              )}
              <CurrencySelectButton
                className="open-currency-select-button"
                selected={!!currency}
                onClick={() => {
                  if (!disableCurrencySelect) {
                    onPresentCurrencyModal()
                  }
                }}
              >
                <Flex alignItems="center" justifyContent="flex-end" style={{ gap: '20px', width: '170px' }}>
                  {pair ? (
                    <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={40} margin />
                  ) : currency ? (
                    <CurrencyLogo currency={currency} size="40px" style={{ marginRight: '8px' }} />
                  ) : null}
                  {pair ? (
                    <Text id="pair">
                      {pair?.token0.symbol}:{pair?.token1.symbol}
                    </Text>
                  ) : (
                    <Text style={{ whiteSpace: 'nowrap' }} color="textSubtle" id="pair">
                      {(currency && currency.symbol && currency.symbol.length > 20
                        ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                            currency.symbol.length - 5,
                            currency.symbol.length,
                          )}`
                        : currency?.symbol) || t('Select a currency')}
                    </Text>
                  )}
                  {!disableCurrencySelect && <ChevronDownIcon width={13} />}
                </Flex>
              </CurrencySelectButton>
            </RowContainer>
          </InputRow>
        </Container>
      </InputPanel>
    </Box>
  )
}
