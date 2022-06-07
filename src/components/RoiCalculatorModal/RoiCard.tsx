import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Flex, Text, Input, CheckmarkIcon, CustomPencil, IconButton } from 'pickleswap-uikit'
import { useTranslation } from 'contexts/Localization'
import { CalculatorMode, RoiCalculatorReducerState } from './useRoiCalculatorReducer'

const MILLION = 1000000
const TRILLION = 1000000000000

const RoiCardWrapper = styled(Box)`
  /* background: linear-gradient(180deg, #53dee9, #7645d9); */
  padding: 1px;
  width: 100%;
  border-radius: 10px;
`

const RoiCardInner = styled(Box)`
  height: 120px;
  padding: 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundAlt1};
`

const StyledInput = styled(Input)`
  border: none;

  &:focus:not(:disabled) {
    border: none;
    outline: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.contrast};
    opacity: 1;
  }
`

const RoiInputContainer = styled(Box)`
  font-family: 'RobotoBold';
  font-size: 18px;
  position: relative;
  & > input {
    font-size: 18px;
    max-width: 70%;
    color: ${({ theme }) => theme.colors.contrast};
    font-family: 'RobotoBold';
  }
  &:before {
    position: absolute;
    content: '$';
    color: ${({ theme }) => theme.colors.contrast};
    /* left: 16px; */
    top: 8px;
  }
`

const RoiDisplayContainer = styled(Flex)`
  max-width: 82%;
  margin-right: 8px;
`

const RoiDollarAmount = styled(Text)<{ fadeOut: boolean }>`
  position: relative;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 0px;
  }

  ${({ fadeOut, theme }) =>
    fadeOut &&
    `
      &:after {
        background: linear-gradient(
          to right,
          ${theme.colors.background}00,
          ${theme.colors.background}E6
        );
        content: '';
        height: 100%;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
      }
  `}
`

interface RoiCardProps {
  earningTokenSymbol: string
  calculatorState: RoiCalculatorReducerState
  setTargetRoi: (amount: string) => void
  setCalculatorMode: (mode: CalculatorMode) => void
}

const RoiCard: React.FC<RoiCardProps> = ({ earningTokenSymbol, calculatorState, setTargetRoi, setCalculatorMode }) => {
  const [expectedRoi, setExpectedRoi] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { roiUSD, roiTokens, roiPercentage } = calculatorState.data
  const { mode } = calculatorState.controls

  const { t } = useTranslation()

  useEffect(() => {
    if (mode === CalculatorMode.PRINCIPAL_BASED_ON_ROI && inputRef.current) {
      inputRef.current.focus()
    }
  }, [mode])

  const onEnterEditing = () => {
    setCalculatorMode(CalculatorMode.PRINCIPAL_BASED_ON_ROI)
    setExpectedRoi(
      roiUSD.toLocaleString('en', {
        minimumFractionDigits: roiUSD > MILLION ? 0 : 2,
        maximumFractionDigits: roiUSD > MILLION ? 0 : 2,
      }),
    )
  }

  const onExitRoiEditing = () => {
    setCalculatorMode(CalculatorMode.ROI_BASED_ON_PRINCIPAL)
  }
  const handleExpectedRoiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.validity.valid) {
      const roiAsString = event.target.value.replace(/,/g, '.')
      setTargetRoi(roiAsString)
      setExpectedRoi(roiAsString)
    }
  }
  return (
    <RoiCardWrapper>
      <RoiCardInner>
        <Text fontSize="12px" color="primary" fontFamily="RobotoBold" textTransform="uppercase">
          {t('ROI at current rates')}
        </Text>
        <Flex justifyContent="space-between" mt="4px" height="36px">
          {mode === CalculatorMode.PRINCIPAL_BASED_ON_ROI ? (
            <>
              <RoiInputContainer>
                <StyledInput
                  ref={inputRef}
                  type="text"
                  inputMode="decimal"
                  pattern="^[0-9]+[.,]?[0-9]*$"
                  scale="sm"
                  value={expectedRoi}
                  placeholder="0.0"
                  onChange={handleExpectedRoiChange}
                />
              </RoiInputContainer>
              <IconButton scale="sm" variant="text" onClick={onExitRoiEditing}>
                <CheckmarkIcon color="primary" width="28px" />
              </IconButton>
            </>
          ) : (
            <>
              <RoiDisplayContainer onClick={onEnterEditing}>
                {/* Dollar sign is separate cause its not supposed to scroll with a number if number is huge */}
                <Text color="contrast" fontFamily="RobotoBold" fontSize="18px">
                  $
                </Text>
                <RoiDollarAmount color="contrast" fontFamily="RobotoBold" fontSize="18px" fadeOut={roiUSD > TRILLION}>
                  {roiUSD.toLocaleString('en', {
                    minimumFractionDigits: roiUSD > MILLION ? 0 : 2,
                    maximumFractionDigits: roiUSD > MILLION ? 0 : 2,
                  })}
                </RoiDollarAmount>
              </RoiDisplayContainer>
              <IconButton scale="sm" variant="text" onClick={onEnterEditing}>
                <CustomPencil width="28px" />
              </IconButton>
            </>
          )}
        </Flex>
        <Text fontSize="12px" style={{ opacity: 0.5 }} color="contrast">
          ~ {roiTokens} {earningTokenSymbol} (
          {roiPercentage.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          %)
        </Text>
      </RoiCardInner>
    </RoiCardWrapper>
  )
}

export default RoiCard
