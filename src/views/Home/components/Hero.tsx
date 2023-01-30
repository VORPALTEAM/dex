import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from 'vorpaltesttoolkit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { windowNames } from 'state/referral'
import { refSelectWindow } from 'state/actions'
import { State } from 'state/types'
import { useAppDispatch } from 'state'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import BorderedHeading from 'components/HeadingBorder'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'
import EnvImg from './EnvImg'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const PlayImgButton = styled(Button)`
    background: url(/images/home/lunar-galaxy/video_play.png);
    background-repeat: no-repeat;
    position: absolute;
    background-position: center;
    background-size: 500px;
    width: 35%;
    height: 300px;
    top: 193px;
    left: 661px;
    box-shadow: none;
    border: none;
  `
  
const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`
const imagePath = '/images/home/lunar-galaxy/'
const imageSrc = 'star-l'

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const newState = useSelector((state: State) => {
     return state
  })

  const OpenVideo = () => {
    dispatch(refSelectWindow(windowNames.video))
    setTimeout(() => {
       console.log(newState)
    }, 999)
  }

  return (
    <>
      <BgWrapper>
        { /* <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper> */}
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxxl" color="#ACF800" mb="20px">
            {t('World first survive to earn metaverse')}
          </Heading>
           <BorderedHeading />     
             <Heading scale="md" color="#FFFFFF" mb="24px">
               {t('Play, earn, trade and try to survive in the most unpredictable decentralized metaverse in the galaxy')}
             </Heading>
           <BorderedHeading />    
          <Flex>
            {!account && <ConnectWalletButton mr="42px" />}
            <Link to="https://sale.vorpal.finance/">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Invest now!')}</Button>
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <picture>
              <source type="image/webp" srcSet={getSrcSet(imagePath, imageSrc, '.webp')} />
              <source type="image/png" srcSet={getSrcSet(imagePath, imageSrc)} />
              <img src={`${imagePath}${imageSrc}.png`} alt={t('Lunar galaxy')} />
            </picture>
          </BunnyWrapper>
          {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
  </StarsWrapper> */}
        </Flex>
        <EnvImg className="rotating" src="/images/home/lunar-galaxy/galaxy.png" alt="galaxy" style={{
             width: '73%',
             top: -67,
             left: 450
          }} />
          <PlayImgButton onClick={OpenVideo} />  
      </Flex>
    </>
  )
}

export default Hero
