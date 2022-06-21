import React, { useState } from 'react'
import { JSBI, Pair, Percent } from 'pickleswap-sdk2'
import {
  Button,
  Text,
  // ChevronUpIcon,
  ChevronDownIcon,
  Card,
  CardBody,
  Flex,
  CardProps,
  AddIcon,
  darkColors,
} from 'pickleswap-uikit'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useTotalSupply from '../../hooks/useTotalSupply'

import { useTokenBalance } from '../../state/wallet/hooks'
import { currencyId } from '../../utils/currencyId'
import { unwrappedToken } from '../../utils/wrappedCurrency'

import { LightCard } from '../Card'
import { AutoColumn } from '../Layout/Column'
import CurrencyLogo from '../Logo/CurrencyLogo'
import { DoubleCurrencyLogo } from '../Logo'
import { RowBetween, RowFixed } from '../Layout/Row'
import { BIG_INT_ZERO } from '../../config/constants'
import Dots from '../Loader/Dots'

const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`

const StyledCardBody = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt1};
`

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt1};
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundAlt1};
  font-size: 18px;
  font-family: 'RobotoBold';
  margin-bottom: 11px;
`

interface PositionCardProps extends CardProps {
  pair: Pair
  showUnwrapped?: boolean
}

export function MinimalPositionCard({ pair, showUnwrapped = false }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const { t } = useTranslation()

  const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0)
  const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <>
      {userPoolBalance && JSBI.greaterThan(userPoolBalance.raw, JSBI.BigInt(0)) ? (
        <Card>
          <StyledCardBody>
            <AutoColumn gap="16px">
              <FixedHeightRow>
                <RowFixed>
                  <Text fontSize="14px" color="turquoise" bold>
                    {t('LP tokens in your wallet')}
                  </Text>
                </RowFixed>
              </FixedHeightRow>
              <FixedHeightRow onClick={() => setShowMore(!showMore)}>
                <RowFixed>
                  <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin size={20} />
                  <Text small color="contrast">
                    {currency0.symbol}-{currency1.symbol} LP
                  </Text>
                </RowFixed>
                <RowFixed>
                  <Text color="contrast">{userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}</Text>
                </RowFixed>
              </FixedHeightRow>
              <AutoColumn gap="4px">
                <FixedHeightRow>
                  <Text color="contrast" small>
                    {t('Share of Pool')}:
                  </Text>
                  <Text color="contrast">{poolTokenPercentage ? `${poolTokenPercentage.toFixed(6)}%` : '-'}</Text>
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text color="contrast" small>
                    {t('Pooled %asset%', { asset: currency0.symbol })}:
                  </Text>
                  {token0Deposited ? (
                    <RowFixed>
                      <Text color="contrast" ml="6px">
                        {token0Deposited?.toSignificant(6)}
                      </Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text color="contrast" small>
                    {t('Pooled %asset%', { asset: currency1.symbol })}:
                  </Text>
                  {token1Deposited ? (
                    <RowFixed>
                      <Text color="contrast" ml="6px">
                        {token1Deposited?.toSignificant(6)}
                      </Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
              </AutoColumn>
            </AutoColumn>
          </StyledCardBody>
        </Card>
      ) : (
        <LightCard>
          <Text fontSize="14px" color="#F1F6F9" style={{ textAlign: 'center' }}>
            <span role="img" aria-label="pancake-icon">
              🥞
            </span>{' '}
            {t(
              "By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.",
            )}
          </Text>
        </LightCard>
      )}
    </>
  )
}

export default function FullPositionCard({ pair, ...props }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const { t } = useTranslation()

  const currency0 = unwrappedToken(pair.token0)
  const currency1 = unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <StyledCard background={darkColors.backgroundAlt1} style={{ borderRadius: '6px' }} {...props}>
      <Flex justifyContent="space-between" role="button" onClick={() => setShowMore(!showMore)} p="16px">
        <Flex flexDirection="column">
          <Flex alignItems="center" mb="4px">
            <DoubleCurrencyLogo currency0={currency0} currency1={currency1} size={40} />
            <Text color="contrast" fontSize="18px" ml="8px">
              {!currency0 || !currency1 ? <Dots>{t('Loading')}</Dots> : `${currency0.symbol}/${currency1.symbol}`}
            </Text>
          </Flex>
          <Text fontSize="18px" color="contrast">
            {userPoolBalance?.toSignificant(4)}
          </Text>
        </Flex>
        {showMore ? (
          <ChevronDownIcon style={{ transform: 'rotate(180deg)' }} width={13} />
        ) : (
          <ChevronDownIcon width={13} />
        )}
      </Flex>

      {showMore && (
        <AutoColumn gap="20px" style={{ padding: '16px' }}>
          <FixedHeightRow>
            <RowFixed>
              <CurrencyLogo size="40px" currency={currency0} />
              <Text fontSize="18px" color="contrast" ml="4px">
                {t('Pooled %asset%', { asset: currency0.symbol })}:
              </Text>
            </RowFixed>
            {token0Deposited ? (
              <RowFixed>
                <Text fontSize="18px" color="contrast" ml="6px">
                  {token0Deposited?.toSignificant(6)}
                </Text>
              </RowFixed>
            ) : (
              '-'
            )}
          </FixedHeightRow>

          <FixedHeightRow>
            <RowFixed>
              <CurrencyLogo size="40px" currency={currency1} />
              <Text fontSize="18px" color="contrast" ml="4px">
                {t('Pooled %asset%', { asset: currency1.symbol })}:
              </Text>
            </RowFixed>
            {token1Deposited ? (
              <RowFixed>
                <Text fontSize="18px" color="contrast" ml="6px">
                  {token1Deposited?.toSignificant(6)}
                </Text>
              </RowFixed>
            ) : (
              '-'
            )}
          </FixedHeightRow>

          <FixedHeightRow>
            <Text fontSize="18px" color="contrast">
              {t('Share of Pool')}
            </Text>
            <Text fontSize="18px" color="contrast">
              {poolTokenPercentage
                ? `${poolTokenPercentage.toFixed(2) === '0.00' ? '<0.01' : poolTokenPercentage.toFixed(2)}%`
                : '-'}
            </Text>
          </FixedHeightRow>

          {userPoolBalance && JSBI.greaterThan(userPoolBalance.raw, BIG_INT_ZERO) && (
            <Flex flexDirection="column" alignItems="center" marginTop="30px">
              <StyledButton
                as={Link}
                to={`/remove/${currencyId(currency0)}/${currencyId(currency1)}`}
                variant="primary"
                width="240px"
                height="40px"
                marginBottom="11px"
                style={{ borderRadius: '20px' }}
              >
                {t('Remove')}
              </StyledButton>
              <Button
                as={Link}
                to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
                variant="text"
                startIcon={<AddIcon color="primary" />}
                width="240px"
                height="20px"
                style={{ fontSize: '14px' }}
              >
                {t('Add liquidity instead')}
              </Button>
            </Flex>
          )}
        </AutoColumn>
      )}
    </StyledCard>
  )
}
