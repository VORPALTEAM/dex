import React, {useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flex, Box, Heading, Button } from 'vorpaltesttoolkit'
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

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`
const GalaxyImg = styled(EnvImg)`
  width: 73%;
  top: -67px;
  left: 450px;

  @media screen and (max-width: 857px) {
    width: 100%;
    left: 0px;
    display: block;
  }
`

const imagePath = '/images/home/lunar-galaxy/'
const imageSrc = 'star-l'

 
const PlayImgButton = styled(Button)`
background: url(/images/home/lunar-galaxy/video_play.png);
background-repeat: no-repeat;
position: absolute;
background-position: center;
background-size: 300px;
width: 250px;
height: 250px;
top: 245px;
left: 735px;
box-shadow: none;
border: none;
border-radius: 120px;
z-index: 5;

&:hover,
&:focus {
  background: url(/images/home/lunar-galaxy/video_play_open.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 300px;
  opacity: 1;
}

@media screen and (max-width: 857px) {
  width: 50%;
  top: calc(40px + 10vw);
  background-size: 175px;
  left: 25%;
  display: block;

  &:hover,
  &:focus {
    background-size: 175px;
    opacity: 1;
  }
}
`

const GalaxySection = styled(Box)`
  position: absolute;
  width: 73%;
  top: -67px;
  left: 450px;
  z-index: -1;

  @media screen and (max-width: 857px) {
     left: 0;
     width: 100%;
  }
`

const HeroHeading = styled(Heading)`

@media screen and (max-width: 857px) {
   text-align: center;
   font-size: 36px;
   margin-top: 40vw;
}
`

const HeroConnectButton = styled(ConnectWalletButton)`

@media screen and (max-width: 857px) {
  width: 40% !important;
  padding: 12px;
}
`

const HeroAddButton = styled(Button)`

 @media screen and (max-width: 857px) {
   width: 100% !important;
   font-size: 12px !important;
}
`

const HeroSubHeading = styled(Heading)`

 @media screen and (max-width: 857px) {
   text-align: center;
   font-size 16px;

 }
`

const HeroBtnFlex = styled(Flex)`

 @media screen and (max-width: 857px) {

    justify-content: space-between;

  &.centered {
    justify-content: center;
  }
 }
`

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const [playBtnTop, setPlayBtn] = useState(500)
  const [galaxyTop, setGTop] = useState(0)
  const [headingMarginMobile, setMH] = useState(125)
  const dispatch = useAppDispatch()
  const newState = useSelector((state: State) => {
     return state
  })

  const MobilePlayBtnSetup = () => {
    const galaxy = document.getElementById("lunar--galaxy")
     const heading = document.getElementById("main--heading")
     const gRect = galaxy.getBoundingClientRect().y
     const gHeight = galaxy.getBoundingClientRect().height
     const gBottom = galaxy.getBoundingClientRect().bottom

     const heroS = document.getElementById("homepage-hero")
     const offset = heroS.offsetTop
     const defr = window.pageYOffset
     const scr = document.documentElement.clientWidth  
     const scrH = document.documentElement.clientHeight
     
     const playBtnBase = -210.5 + (gRect + (gHeight / 2))
     const addDefr = defr
     
     if (gBottom > -600) {
      setPlayBtn (scr > 856 ? null : playBtnBase + addDefr )
      setMH(scr > 856 ? null : (gBottom  - 380 - (scr * 0.1) + addDefr ))
     }
  }

  useEffect(() => {
    MobilePlayBtnSetup()

    window.addEventListener('resize',() => {
      MobilePlayBtnSetup()
    })

    window.addEventListener('scroll',() => {
      MobilePlayBtnSetup()
    })

  }, [])

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
          <HeroHeading style={{marginTop: headingMarginMobile}} id="main--heading" scale="xxxl" color="#ACF800" mb="20px">
            {t('World first survive to earn metaverse')}
          </HeroHeading>
           <BorderedHeading />     
             <HeroSubHeading scale="md" color="#FFFFFF" mb="24px">
               {t('Play, earn, trade and try to survive in the most unpredictable decentralized metaverse in the galaxy')}
             </HeroSubHeading>
           <BorderedHeading />    
          <HeroBtnFlex className={account ? "centered" : ""}>
            {!account && <HeroConnectButton mr="42px" />}
            <Link to={{ pathname: "https://sale.vorpal.finance/" }} target="_blank">
              <HeroAddButton variant={!account ? 'secondary' : 'primary'}>
                {t('Invest now!')}
              </HeroAddButton>
            </Link>
          </HeroBtnFlex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          {/* <BunnyWrapper>
            <picture>
              <source type="image/webp" srcSet={getSrcSet(imagePath, imageSrc, '.webp')} />
              <source type="image/png" srcSet={getSrcSet(imagePath, imageSrc)} />
              <img src={`${imagePath}${imageSrc}.png`} alt={t('Lunar galaxy')} />
            </picture>
          </BunnyWrapper> */}
          {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
  </StarsWrapper> */}
        </Flex>
        <GalaxySection>
          <img className="rotating" onLoad={MobilePlayBtnSetup} id="lunar--galaxy" src="/images/home/lunar-galaxy/galaxy.webp" alt="galaxy" />
        </GalaxySection>
        <PlayImgButton id="mainPlayBtn" style={{top: playBtnTop}} onClick={OpenVideo} />
        {/* <GalaxyImg style={{ top: galaxyTop }} id="lunar--galaxy" onLoad={MobilePlayBtnSetup}
        className="rotating" src="/images/home/lunar-galaxy/galaxy.png" alt="galaxy" />
        <PlayImgButton style={{top: playBtnTop}} onClick={OpenVideo} /> */}
        {/* <img src="/images/home/lunar-galaxy/video_play.png" onClick={OpenVideo} style={
          {
            position: 'absolute',
            top: playBtnTop,
            left: 732,
            width: 275,
            height: 275

          }
        }/> */}
      </Flex>
    </>
  )
}

export default Hero
