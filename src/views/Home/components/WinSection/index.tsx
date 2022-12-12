import React from 'react'
import styled from 'styled-components'
import Container from 'components/Layout/Container'
import { Heading, Flex, Text, TicketFillIcon, PredictionsIcon } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import ColoredWordHeading from '../ColoredWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'
import LotteryCardContent from './LotteryCardContent'
import CompositeImage, { getSrcSet, CompositeImageProps } from '../CompositeImage'
import EnvImg from '../EnvImg'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  /* background-image: url('/images/home/lottery-balls/Galaxy_ls.png'); */
  background-position: center center;
  backgrount-repeat: no-repeat;
  padding: 16px;
  box-sizing: border-box;
  backdrop-filter: opacity(0%);
  min-height: 960px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

const PredictionCardData: IconCardData = {
  icon: <PredictionsIcon width="36px" color="inverseContrast" />,
  position: 'absolute;',
  background: 'url(/images/home/lottery-balls/ticket.png) -10px -10px/360px 430px no-repeat',
  borderColor: 'none',
  rotation: '-5deg',
  height: 420
}

const LotteryCardData: IconCardData = {
  icon: <TicketFillIcon color="transparent" width="36px" />,
  background: 'url(/images/home/lottery-balls/ticket.png) -10px -10px/360px 430px no-repeat',
  borderColor: 'none',
  rotation: '6deg',
  width: 320,
  height: 420
}

const imagesPlanets : CompositeImageProps = {
  path: 'images/home/lottery/',
  attributes: [
    { src: 'planet_sm_3', alt: '3D Star' },
    { src: 'planet_sm_2', alt: '3D Star' },
    { src: 'planet_sm_1', alt: '3D Star' },
  ],
}

const imagesGalaxy : CompositeImageProps = {
  path: 'images/home/lottery/',
  attributes: [
    { src: 'galaxy_sm_3', alt: '3D Star' },
    { src: 'galaxy_sm_2', alt: '3D Star' },
    { src: 'galaxy_sm_1', alt: '3D Star' },
  ],
}

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: -330px;
  bottom: 60px;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  top: 180px;
  right: -260px;
`
 
const WinSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <TransparentFrame isDark={theme.isDark}>
        <img className="rotating" alt="win galaxy" style={{position: 'absolute'}} src="/images/home/lottery-balls/Galaxy_ls.png" />
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading scale="xl" color="primary">{t('Win millions in prizes')}</Heading>
          <Text color="textSubtle">{t('Provably fair, on-chain game.')}</Text>
          <Text mb="40px" color="textSubtle">
            {t('Win big with VORPAL META.')}
          </Text>
          <Flex m="0 auto" flexDirection={['column', null, null, 'row']} maxWidth="600px">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}>
                <PredictionCardContent />
              </IconCard>
            </Flex>
            <Flex flex="1" maxWidth={['275px', null, null, '100%']}>
              <IconCard ml="100px" {...LotteryCardData}>
                <LotteryCardContent />
              </IconCard>
            </Flex>
          </Flex>
          <TopLeftImgWrapper>
               <CompositeImage {...imagesPlanets} maxHeight="512px" />
          </TopLeftImgWrapper>
          <BottomRightImgWrapper>
               <CompositeImage {...imagesGalaxy} maxHeight="512px" />
          </BottomRightImgWrapper>
        </Flex>
        {/* <EnvImg src="images/home/lottery/planet_1.png" alt="planet_1" style={{
          top: -41,
          left: -170
        }} />
        <EnvImg src="images/home/lottery/planet_2.png" alt="planet_1" style={{
          top: 226,
          left: -344
        }} />
        <EnvImg src="images/home/lottery/planet_3.png" alt="planet_1" style={{
          top: 661,
          left: -284
        }} />
        <EnvImg src="images/home/lottery/galaxy_1.png" alt="planet_1" style={{
          top: -82,
          left: 702
        }} />
        <EnvImg src="images/home/lottery/galaxy_2.png" alt="planet_1" style={{
          top: 286,
          left: 902
        }} />
        <EnvImg src="images/home/lottery/galaxy_3.png" alt="planet_1" style={{
          top: 595,
          left: 702
        }} /> */}
      </TransparentFrame>
    </>
  )
}

export default WinSection
