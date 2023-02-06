import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const SubHeading = styled(Heading)`
font-family: RoundsBlack;
font-size: 24px;
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: -60px;
  top: 0;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: -60px;
  bottom: 0;
`

const topLeftImage = {
  path: '/images/home/flying-stars/',
  attributes: [
    { src: '1-bottom', alt: 'Star flying on the bottom' },
    { src: '1-left', alt: 'Star flying on the left' },
  ],
}

const bottomRightImage = {
  path: '/images/home/flying-stars/',
  attributes: [
    { src: '2-bottom', alt: 'Pancake flying on the bottom' },
    { src: '2-right', alt: 'Star flying on the right' },
  ],
}

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper>
        {/* <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex> */}
      </BgWrapper>
      <FloatingPancakesWrapper>
        <TopLeftImgWrapper>
          <CompositeImage {...topLeftImage} maxHeight="384px" />
        </TopLeftImgWrapper>
        <BottomRightImgWrapper>
          <CompositeImage {...bottomRightImage} maxHeight="384px" />
        </BottomRightImgWrapper>
      </FloatingPancakesWrapper>
      <Wrapper mt="60px" mb="60px">
        <Heading className="mobile--center" mb="24px" scale="xl" color="primary">
          {t('It’s time to get SCHWIFTY')}
        </Heading>
        <Text textAlign="center" color="white">
          {t('Connect your crypto wallet to start using the app in seconds')}
        </Text>
        <Text mb="24px" bold color="white">
          {t('No registration needed')}
        </Text>
        <SubHeading mb="16px" scale="lg" color="white">
          {t('Show me what you got')}
        </SubHeading>
        <Link external href="/">
          {t('Learn how to start')}
        </Link>
        {!account && <ConnectWalletButton className="mobile--long" mt="24px" />}
      </Wrapper> 
    </>
  )
}

export default Footer
