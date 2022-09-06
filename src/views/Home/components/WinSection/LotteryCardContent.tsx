import React, { useState, useEffect, useMemo } from 'react'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon, Heading } from 'vorpaltesttoolkit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { useSlowFresh } from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { usePriceCakeBusd } from 'state/farms/hooks'
import Balance from 'components/Balance'
import styled from 'styled-components'
import { fetchCurrentLotteryIdAndMaxBuy, fetchLottery } from 'state/lottery/helpers'
import BigNumber from 'bignumber.js'
import { getBalanceAmount } from 'utils/formatBalance'

const StyledLink = styled(Link)`
  width: 100%;
`

const StyledButton = styled(Button)`
  width: 260px;
  height: 40px;
  background: #352F44;
  color: #FFFFFF;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 6px;
  margin: auto;
  margin-top: 26px;
  pointer-events: none;
`

const StyledBalance = styled(Balance)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const slowRefresh = useSlowFresh()
  const [lotteryId, setLotteryId] = useState<string>(null)
  const [currentLotteryPrize, setCurrentLotteryPrize] = useState<BigNumber>(null)
  const cakePriceBusdAsString = usePriceCakeBusd().toString()

  const cakePrizesText = t('%cakePrizeInUsd% in CAKE prizes this round', { cakePrizeInUsd: cakePriceBusdAsString })
  const [pretext, prizesThisRound] = cakePrizesText.split(cakePriceBusdAsString)

  const cakePriceBusd = useMemo(() => {
    return new BigNumber(cakePriceBusdAsString)
  }, [cakePriceBusdAsString])

  /* useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  useEffect(() => {
    // get current lottery ID
    const fetchCurrentID = async () => {
      const { currentLotteryId } = await fetchCurrentLotteryIdAndMaxBuy()
      setLotteryId(currentLotteryId)
    }

    if (loadData) {
      fetchCurrentID()
    }
  }, [loadData, setLotteryId]) */

  const lotAmount = '$131,919'

  useEffect(() => {
    // get public data for current lottery
    const fetchCurrentLotteryPrize = async () => {
      const { amountCollectedInCake } = await fetchLottery(lotteryId)
      const prizeInBusd = cakePriceBusd.times(amountCollectedInCake)
      setCurrentLotteryPrize(prizeInBusd)
    }

    if (lotteryId) {
      fetchCurrentLotteryPrize()
    }
  }, [lotteryId, slowRefresh, setCurrentLotteryPrize, cakePriceBusd])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#280D5F" bold fontSize="16px">
          {t('LOTTERY')}
        </Text>
        {pretext && (
          <Text color="white" mt="12px" bold fontSize="16px">
            {pretext}
          </Text>
        )}
        <Heading color="#280D5F" my="8px" scale="xl" bold>
            {lotAmount}
          </Heading>
        {/* currentLotteryPrize && currentLotteryPrize.gt(0) ? (
           <Heading color="#280D5F" my="8px" scale="xl" bold>
            {lotAmount}
          </Heading>
        ) : (
          <>
            <Skeleton width={200} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        ) */}
        <Text color="#280D5F" mb="24px" bold fontSize="16px">
          {prizesThisRound}
        </Text>
        <Text color="#280D5F" mb="40px">
          {t('Buy tickets with CAKE, win CAKE if your numbers match')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
          <StyledButton width="100%">
            <Text bold color="invertedContrast">
              {t('COMING SOON')}
            </Text>
          </StyledButton>
      </Flex>
    </>
  )
}

export default LotteryCardContent
