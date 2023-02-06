import React from 'react'
import { Heading, Flex, Text, Skeleton, 
  ChartIcon, CommunityIcon, SwapIcon, Button, Link } from 'vorpaltesttoolkit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 6/9/21
const starsCount = 21000
const planetsCount = 2100000
const federationsCount = 5

const Stats = () => {
  const { t } = useTranslation()
  // const data = useGetStats()

  const fString = formatLocalisedCompactNumber(federationsCount)
  const stars = formatLocalisedCompactNumber(starsCount)
  const planets = formatLocalisedCompactNumber(planetsCount)

  const  tvlText= t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: fString })
  // const [entrusting, inFunds] = tvlText.split(fString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  const LocalHeading = styled(Heading)`
  margin: -36px 0 0 0;
`
  const LocalText = styled(Text)`
  margin: 18px 0 0 0;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 48%;
  }
`

  const LocalSubHeading = styled(Heading)`
    margin: 30px 0 32px 0;
    font-size: 30px;
  `

  const ExploreButton = styled(Button)`
     background: transparent;
     border: 3px solid #00F0FF;
     border-radius: 10px;
     box-shadow: 0px 0px 10px 0px #00F0FF;
     margin: 48px 0;

     padding-top: 8px;
     padding-bottom: 6px;
     font-weight: 700;
     text-decoration: none;
     font-size: 24px;
     color: #00F0FF;

     &:hover,
     &:focus {
        background: #00F0FF;
        opacity: 1 !important;
        color: #000;
        text-decoration: none !important;

     }
    `

  const ExploreLink = styled(Link)`  
     text-decoration: none !important;
  `

  const MetricsCard = styled(IconCard)`  
    ${({ theme }) => theme.mediaQueries.mobile} {
      transform: scale(1);
    }
  `

  const StarmapLink = () => {
     document.location.href="https://starmap.vorpal.finance/"
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="334px" width="334px" mb="0px" />
      <LocalHeading textAlign="center" color="#ACF800" scale="xl">
        {t('Сreated by players for players')}
      </LocalHeading>
      <LocalText textAlign="center" color="textSubtle">
        {t('Each season, players will evolve, unite, fight, breed and defend for the sole purpose of surviving in order to gain access to the “Season Bank”')}
      </LocalText>

      <LocalSubHeading textAlign="center" color="textSubtle" scale="xl" mb="32px">
        {t('Will you join them?')}
      </LocalSubHeading>
      <Flex flexDirection={['column', null, null, 'row']}>
        <MetricsCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%planets%', { planets })}
            headingSecondText="NFT PLANETS"
            bodyText={t('Circulating supply')}
            highlightColor='#43D8C9'
          />
        </MetricsCard>
        <MetricsCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%stars%', { stars })}
            headingSecondText="NFT STARS"
            bodyText={t('Total supply')}
            highlightColor='#C62A88'
          />
        </MetricsCard>
        <MetricsCard {...StakedCardData}>
          <StatCardContent
            headingText={t('%fString% unique', { fString })}
            headingSecondText="FEDERATIONS"
            bodyText={t('Make your choice')}
            highlightColor='#590995'
          />
        </MetricsCard>
      </Flex>
      <ExploreLink href="https://starmap.vorpal.finance/" 
      target="_blank" color="#00F0FF">
        <ExploreButton href="https://starmap.vorpal.finance/">
          Explore
        </ExploreButton>
      </ExploreLink>
    </Flex>
  )
}

export default Stats
