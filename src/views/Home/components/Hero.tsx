import React, {useState, useEffect} from 'react'
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
  
const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const GalaxyImg = styled(EnvImg)`
  width: 73%;
  top: -67px;
  left: 450px;

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0px;
    display: block;
  }
`

const imagePath = '/images/home/lunar-galaxy/'
const imageSrc = 'star-l'

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const [playBtnTop, setPlayBtn] = useState(500)
  const [headingMarginMobile, setMH] = useState(-20)
  const dispatch = useAppDispatch()
  const newState = useSelector((state: State) => {
     return state
  })

  const MobilePlayBtnSetup = () => {
     const galaxy = document.getElementById("lunar--galaxy")
     const heading = document.getElementById("main--heading")
     const hRect = heading.getBoundingClientRect().y
     const gRect = galaxy.getBoundingClientRect().y
     const gHeight = galaxy.getBoundingClientRect().height
     const gBottom = galaxy.getBoundingClientRect().bottom
     const hMargin = -40 + (gBottom - 380)

     setMH(hMargin)
     setPlayBtn (-230.5 + (gRect + (gHeight / 2)))
  }

  useEffect(() => {
    MobilePlayBtnSetup()
  
    window.addEventListener('resize', () => {
      MobilePlayBtnSetup()
    })
  }, [])

  const PlayImgButton = styled(Button)`
    background: url(/images/home/lunar-galaxy/video_play.png);
    background-repeat: no-repeat;
    position: absolute;
    background-position: center;
    background-size: 500px;
    width: 275px;
    height: 275px;
    top: 220px;
    left: 732px;
    box-shadow: none;
    border: none;

    &:hover,
    &:focus {
      background: url(/images/home/lunar-galaxy/video_play_open.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 500px;
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      width: 50%;
      top: ${playBtnTop}px;
      background-size: 200px;
      left: 25%;
      display: block;

      &:hover,
      &:focus {
        background-size: 200px;
        opacity: 1;
      }
    }
  `

  const HeroHeading = styled(Heading)`

   @media screen and (max-width: 768px) {
       text-align: center;
       font-size: 36px;
       margin-top: ${headingMarginMobile}px;
    }
  `

  const HeroConnectButton = styled(ConnectWalletButton)`

  @media screen and (max-width: 768px) {
      width: 40% !important;
      padding: 12px;
   }
 `

 const HeroAddButton = styled(Button)`

 @media screen and (max-width: 768px) {
     width: 100% !important;
     font-size: 12px !important;
  }
`

  const HeroSubHeading = styled(Heading)`

   @media screen and (max-width: 768px) {
       text-align: center;
       font-size 16px;

    }
  `

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
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <HeroHeading id="main--heading" scale="xxxl" color="#ACF800" mb="20px">
            {t('World first survive to earn metaverse')}
          </HeroHeading>
           <BorderedHeading />     
             <HeroSubHeading scale="md" color="#FFFFFF" mb="24px">
               {t('Play, earn, trade and try to survive in the most unpredictable decentralized metaverse in the galaxy')}
             </HeroSubHeading>
           <BorderedHeading />    
          <Flex justifyContent="space-between">
            {!account && <HeroConnectButton mr="42px" />}
            <Link to="https://sale.vorpal.finance/">
              <HeroAddButton variant={!account ? 'secondary' : 'primary'}>
                {t('Invest now!')}
              </HeroAddButton>
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
        <GalaxyImg id="lunar--galaxy" onLoad={MobilePlayBtnSetup}
        className="rotating" src="/images/home/lunar-galaxy/galaxy.png" alt="galaxy" />
          <PlayImgButton onClick={OpenVideo} />  
      </Flex>
    </>
  )
}

export default Hero
