import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {
  Modal,
  Text,
  Button,
  Flex,
  ButtonMenu,
  Checkbox,
  BalanceInput,
  CustomHelpIcon,
  CustomButtonMenuItem,
  useTooltip,
  Heading,
} from 'vorpaltesttoolkit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import RoiCalculatorFooter from './RoiCalculatorFooter'
import RoiCard from './RoiCard'
import useRoiCalculatorReducer, { CalculatorMode, EditingCurrency } from './useRoiCalculatorReducer'
import AnimatedArrow from './AnimatedArrow'

interface RoiCalculatorModalProps {
  onDismiss?: () => void
  onBack?: () => void
  earningTokenPrice: number
  apr: number
  displayApr?: string
  linkLabel: string
  linkHref: string
  stakingTokenBalance: BigNumber
  stakingTokenSymbol: string
  stakingTokenPrice: number
  earningTokenSymbol?: string
  multiplier?: string
  autoCompoundFrequency?: number
  performanceFee?: number
  isFarm?: boolean
  initialValue?: string
}

const StyledModal = styled(Modal)`
  width: 340px;
  & > :nth-child(2) {
    padding: 0;
  }

  ${Heading} {
    font-family: 'RoundsBlack';
  }
`

const StyledCheckbox = styled(Checkbox)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt1};
  border-radius: 10px;

  &:after {
    content: '';
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.CustomFocus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.CustomFocus};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.backgroundAlt1};

    &:after {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`

const ScrollableContainer = styled.div`
  padding: 24px;
  max-height: 500px;
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt1};
  color: ${({ theme }) => theme.colors.contrast};
  border-radius: 15px;
  height: 20px;
`

const FullWidthButtonMenu = styled(ButtonMenu)<{ disabled?: boolean }>`
  width: 100%;
  background: rgba(53, 47, 68, 0.3);
  border: 1px solid rgba(53, 47, 68, 0.3);
  border-radius: 15px;

  & > button {
    /* background: ${({ theme }) => theme.colors.backgroundAlt1}; */
    /* border-radius: 15px; */
    width: 100%;
  }

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  onDismiss,
  onBack,
  earningTokenPrice,
  apr,
  displayApr,
  linkLabel,
  linkHref,
  stakingTokenBalance,
  stakingTokenSymbol,
  stakingTokenPrice,
  multiplier,
  initialValue,
  earningTokenSymbol = 'CAKE',
  autoCompoundFrequency = 0,
  performanceFee = 0,
  isFarm = false,
}) => {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()
  const balanceInputRef = useRef<HTMLInputElement | null>(null)

  const {
    state,
    setPrincipalFromUSDValue,
    setPrincipalFromTokenValue,
    setStakingDuration,
    toggleCompounding,
    toggleEditingCurrency,
    setCompoundingFrequency,
    setCalculatorMode,
    setTargetRoi,
  } = useRoiCalculatorReducer(stakingTokenPrice, earningTokenPrice, apr, autoCompoundFrequency, performanceFee)

  const { compounding, activeCompoundingIndex, stakingDuration, editingCurrency } = state.controls
  const { principalAsUSD, principalAsToken } = state.data

  // Auto-focus input on opening modal
  useEffect(() => {
    if (balanceInputRef.current) {
      balanceInputRef.current.focus()
    }
  }, [])

  // If user comes to calculator from staking modal - initialize with whatever they put in there
  useEffect(() => {
    if (initialValue) {
      setPrincipalFromTokenValue(initialValue)
    }
  }, [initialValue, setPrincipalFromTokenValue])

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    isFarm
      ? t('“My Balance” here includes both LP Tokens in your wallet, and LP Tokens already staked in this farm.')
      : t(
          '“My Balance” here includes both %assetSymbol% in your wallet, and %assetSymbol% already staked in this pool.',
          { assetSymbol: stakingTokenSymbol },
        ),
    { placement: 'top-end', tooltipOffset: [20, 10] },
  )

  const onBalanceFocus = () => {
    setCalculatorMode(CalculatorMode.ROI_BASED_ON_PRINCIPAL)
  }

  const editingUnit = editingCurrency === EditingCurrency.TOKEN ? stakingTokenSymbol : 'USD'
  const editingValue = editingCurrency === EditingCurrency.TOKEN ? principalAsToken : principalAsUSD
  const conversionUnit = editingCurrency === EditingCurrency.TOKEN ? 'USD' : stakingTokenSymbol
  const conversionValue = editingCurrency === EditingCurrency.TOKEN ? principalAsUSD : principalAsToken
  const onUserInput = editingCurrency === EditingCurrency.TOKEN ? setPrincipalFromTokenValue : setPrincipalFromUSDValue

  return (
    <StyledModal title={t('ROI Calculator')} onDismiss={onBack || onDismiss} onBack={onBack ?? null}>
      <ScrollableContainer>
        <Flex flexDirection="column" mb="8px">
          <Text color="purple" fontFamily="RobotoBold" fontSize="12px" textTransform="uppercase">
            {t('%asset% staked', { asset: stakingTokenSymbol })}
          </Text>
          <BalanceInput
            currencyValue={`${conversionValue} ${conversionUnit}`}
            innerRef={balanceInputRef}
            placeholder="0.00"
            value={editingValue}
            unit={editingUnit}
            onUserInput={onUserInput}
            switchEditingUnits={toggleEditingCurrency}
            onFocus={onBalanceFocus}
          />
          <Flex justifyContent="space-between" mt="8px">
            <StyledButton
              scale="xs"
              p="4px 16px"
              width="68px"
              variant="tertiary"
              onClick={() => setPrincipalFromUSDValue('100')}
            >
              $100
            </StyledButton>
            <StyledButton
              scale="xs"
              p="4px 16px"
              width="68px"
              variant="tertiary"
              onClick={() => setPrincipalFromUSDValue('1000')}
            >
              $1000
            </StyledButton>
            <StyledButton
              disabled={stakingTokenBalance.lte(0) || !account}
              scale="xs"
              p="4px 16px"
              width="128px"
              variant="tertiary"
              onClick={() =>
                setPrincipalFromUSDValue(getBalanceNumber(stakingTokenBalance.times(stakingTokenPrice)).toString())
              }
            >
              {t('My Balance').toLocaleUpperCase()}
            </StyledButton>
            <span ref={targetRef}>
              <CustomHelpIcon width="20px" height="20px" />
            </span>
            {tooltipVisible && tooltip}
          </Flex>
          <Text mt="24px" color="purple" fontFamily="RobotoBold" fontSize="12px" textTransform="uppercase">
            {t('Staked for')}
          </Text>
          <FullWidthButtonMenu
            variant="subtle"
            activeIndex={stakingDuration}
            onItemClick={setStakingDuration}
            scale="sm"
          >
            <CustomButtonMenuItem variant="tertiary">{t('1D')}</CustomButtonMenuItem>
            <CustomButtonMenuItem variant="tertiary">{t('7D')}</CustomButtonMenuItem>
            <CustomButtonMenuItem variant="tertiary">{t('30D')}</CustomButtonMenuItem>
            <CustomButtonMenuItem variant="tertiary">{t('1Y')}</CustomButtonMenuItem>
            <CustomButtonMenuItem variant="tertiary">{t('5Y')}</CustomButtonMenuItem>
          </FullWidthButtonMenu>
          {autoCompoundFrequency === 0 && (
            <>
              <Text mt="24px" color="purple" fontFamily="RobotoBold" fontSize="12px" textTransform="uppercase">
                {t('Compounding every')}
              </Text>
              <Flex alignItems="center">
                <Flex flex="1">
                  <StyledCheckbox scale="md" checked={compounding} onChange={toggleCompounding} />
                </Flex>
                <Flex flex="6">
                  <FullWidthButtonMenu
                    disabled={!compounding}
                    activeIndex={activeCompoundingIndex}
                    onItemClick={setCompoundingFrequency}
                    scale="sm"
                    variant="subtle"
                  >
                    <CustomButtonMenuItem>{t('1D')}</CustomButtonMenuItem>
                    <CustomButtonMenuItem>{t('7D')}</CustomButtonMenuItem>
                    <CustomButtonMenuItem>{t('14D')}</CustomButtonMenuItem>
                    <CustomButtonMenuItem>{t('30D')}</CustomButtonMenuItem>
                  </FullWidthButtonMenu>
                </Flex>
              </Flex>
            </>
          )}
        </Flex>
        {/* <AnimatedArrow calculatorState={state} /> */}
        <Flex>
          <RoiCard
            earningTokenSymbol={earningTokenSymbol}
            calculatorState={state}
            setTargetRoi={setTargetRoi}
            setCalculatorMode={setCalculatorMode}
          />
        </Flex>
      </ScrollableContainer>
      <RoiCalculatorFooter
        isFarm={isFarm}
        apr={apr}
        displayApr={displayApr}
        autoCompoundFrequency={autoCompoundFrequency}
        multiplier={multiplier}
        linkLabel={linkLabel}
        linkHref={linkHref}
        performanceFee={performanceFee}
      />
    </StyledModal>
  )
}

export default RoiCalculatorModal
