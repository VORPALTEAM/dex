import { Box, Flex, HelpIcon, Skeleton, Text, useMatchBreakpoints, useTooltip } from 'vorpaltesttoolkit'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import { useBUSDCakeAmount } from 'hooks/useBUSDPrice'
import React from 'react'
import { VaultKey } from 'state/types'
import { useIfoPoolCredit, useVaultPoolByKey } from 'state/pools/hooks'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

interface AvgBalanceCellProps {
  account: string
}

const StyledCell = styled(BaseCell)`
  flex: 4.5;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 120px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex: 2 0 100px;
  }
`

const HelpIconWrapper = styled.div`
  align-self: center;
`

const AvgBalanceCell: React.FC<AvgBalanceCellProps> = ({ account }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const {
    userData: { isLoading: userDataLoading },
  } = useVaultPoolByKey(VaultKey.IfoPool)
  const credit = useIfoPoolCredit()

  const hasCredit = credit.gt(0)

  const cakeAsNumberBalance = getBalanceNumber(credit)
  const avgBalanceDollarValue = useBUSDCakeAmount(cakeAsNumberBalance)

  const labelText = `${t('Average')} ${t('Pool Balance')}`

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(
      'Max CAKE entry for both IFO sale is capped by average pool balance in this pool. This is calculated by the average block balance in the IFO pool in the past blocks prior to cut-off block.',
    ),
    { placement: 'bottom' },
  )

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {labelText}
        </Text>
        {userDataLoading && account ? (
          <Skeleton width="80px" height="16px" />
        ) : (
          <>
            {tooltipVisible && tooltip}
            <Flex>
              <Box mr="8px" height="32px">
                <Balance
                  mt="4px"
                  bold={!isMobile}
                  fontSize={isMobile ? '14px' : '16px'}
                  color={hasCredit ? 'primary' : 'textDisabled'}
                  decimals={hasCredit ? 5 : 1}
                  value={hasCredit ? cakeAsNumberBalance : 0}
                />
                {hasCredit ? (
                  <Balance
                    display="inline"
                    fontSize="12px"
                    color="textSubtle"
                    decimals={2}
                    prefix="~"
                    value={avgBalanceDollarValue || 0}
                    unit=" USD"
                  />
                ) : (
                  <Text mt="4px" fontSize="12px" color="textDisabled">
                    0 USD
                  </Text>
                )}
              </Box>
              {hasCredit && !isMobile && (
                <HelpIconWrapper ref={targetRef}>
                  <HelpIcon color="textSubtle" />
                </HelpIconWrapper>
              )}
            </Flex>
          </>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default AvgBalanceCell
