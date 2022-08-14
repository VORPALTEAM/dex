import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon, Heading } from 'vorpaltesttoolkit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import { useSlowFresh } from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { getTotalWon } from 'state/predictions/helpers'
import { useBNBBusdPrice } from 'hooks/useBUSDPrice'
import { multiplyPriceByAmount } from 'utils/prices'

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
  pointer-events: none;
`

const PredictionCardContent = () => {
  const { t } = useTranslation()
  const slowRefresh = useSlowFresh()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  // const bnbBusdPrice = useBNBBusdPrice()
  const [bnbWon, setBnbWon] = useState(0)
  // const bnbWonInUsd = multiplyPriceByAmount(bnbBusdPrice, bnbWon)

  const bnbWonInUsd = 200393
  const pretext = '$'
  const wonSoFar = 'in VORPAL prizes this round'
  const localisedBnbUsdString = '200,393'

 // const localisedBnbUsdString = formatLocalisedCompactNumber(bnbWonInUsd)
  // const bnbWonText = wonAmountText
  // const [pretext, wonSoFar] = bnbWonText.split(localisedBnbUsdString)

  /* useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting]) */

  /* useEffect(() => {
    const fetchMarketData = async () => {
      const totalWon = await getTotalWon()
      setBnbWon(totalWon)
    }

    if (loadData) {
      fetchMarketData()
    }
  }, [slowRefresh, loadData]) */

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#280D5F" bold fontSize="16px">
          {t('LOTTERY')}
        </Text>
        {bnbWonInUsd ? (
          <Heading color="#280D5F" my="8px" scale="xl" bold>
            {pretext}
            {localisedBnbUsdString}
          </Heading>
        ) : (
          <>
            <Skeleton width={230} height={40} my="8px" />
            <div ref={observerRef} />
          </>
        )}
        <Text color="#280D5F" mb="24px" bold fontSize="16px">
          {wonSoFar}
        </Text>
        <Text color="#280D5F" mb="40px">
          {t('Buy tickets with CAKE, win CAKE if your numbers match')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
          <StyledButton width="100%">
            <Text bold color="invertedContrast">
              {t('COMING SOON!')}
            </Text>
          </StyledButton>
      </Flex>
    </>
  )
}

export default PredictionCardContent
