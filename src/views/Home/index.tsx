import React from 'react'
import { Flex } from 'vorpaltesttoolkit'
import styled from 'styled-components'
import BorderedHeading from 'components/HeadingBorder'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import FarmAuctionsBanner from './components/Banners/FarmAuctionsBanner'
import Wallpaper from '../../images/wallpaper.png'

const showBanner = false

const HomeBanner = ({ account }: { account: string }) => {
  if (!showBanner) {
    return null
  }

  return (
    <Flex
      pt={[account ? '220px' : '0', null, null, account ? '76px' : '0']}
      mt={[account ? '0' : '-16px', null, null, account ? '0' : '-48px']}
      pb="24px"
    >
      <FarmAuctionsBanner />
    </Flex>
  )
}

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px; 

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const FooterBorderedHeading = styled(BorderedHeading)`
   padding: 0;
   margin-left: 5%;
   width: 90%;
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%' }

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? `transparent;`
            : `transparent;`
        }
        index={2}
        hasCurvedDivider={false}
      >
        {/* account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        ) */}
        <HomeBanner account={account} />
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '-80px 0 0 0', width: '100%' } }}
        background={
          theme.isDark
            ? 'transparent'
            : 'transparent'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection> 
       <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background='transparent'
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...swapSectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background='transparent'
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...earnSectionData} />
       {/* <FarmsPoolsRow /> */}
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'transparent'
            : 'transparent'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background='transparent'
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
      {/*  <CakeDataRow /> */}
      </PageSection>  
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background='#000117'
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />   
    </PageSection> 
    <FooterBorderedHeading  />
    </>
  )
}

export default Home
