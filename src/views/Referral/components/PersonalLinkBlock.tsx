import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Card, 
         Flex, 
         CloseIcon, 
         Box, 
         Heading, 
         Text, 
         PlusIcon, 
         IconButton,
         ShareReferralIcon, 
         CopyClipboardIcon,
         ModalHeader, 
         PencilReferralIcon } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'
import BorderedHeading from 'components/HeadingBorder'
import { GoldPercentText } from './StyledElms'
import { selectWindow } from '../state/modalReducer'

const PersonalLinkBlock = () => {
  const { t } = useTranslation()

  const [popupActive, setActive] = useState(false)
  const dispatch = useDispatch()

  const LinkCreationStart = () => {
    dispatch(selectWindow("link"))
    setActive(true)
  }

  const NoteCreationStart = () => {
    dispatch(selectWindow("note"))
    setActive(true)
  }

  
  const referralLink = 'vorpal.finance/?ref=4ded6d55a4455f89c0fb...'

  const ReferralBox = styled(Box)`
    width: 100%;
    min-height: 128px;
    border-radius: 20px;
    background: linear-gradient(90deg, #5C258D 0%, #4389A2 100%);
  `
  const RefContent = styled(Box)`
    padding: 20px;
  `
  const HeadingRow = styled(Box)`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    min-width: 560px;
  `
  const RefHeading = styled(Heading)`
    font-family: Roboto;
    font-style: Medium;
    font-size: 32px;
  `
  const RefAddLink = styled.div`
    display: flex;
    margin-top: 10px;
  `

  const LinkBlock  = styled.div`
    display: flex;
    padding: 10px 0 0;
  `

  const ShareBlock = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #FFF;
    border-radius: 5px;
  `
  const RefInput = styled.input`
     width: calc(100% - 50px);
     min-width: 300px;
     background: transparent;
     border: 1px solid #FFF;
     border-radius: 5px;
     color: #F1F6F9;
     font-size: 16px;
     padding: 10px;
     margin-right: 10px;
  `
  const CopyIcon = styled(CopyClipboardIcon)`
     position: absolute;
     right: 75px;
  `

  const YoullGetBlock  = styled.div`
     margin-top: 10px;
     width: 100%;
     display: flex;
     justify-content: space-between;
  `

  const YouGetSection = styled.div`
     width: 72%;
     min-height: 76px;
     background: linear-gradient(90deg, #C33764 0%, #1D2671 100%);
     border-radius: 6px;
  `

  const FriendsGetSection = styled.div`
     width: 26%;
     min-height: 100px;
     background: linear-gradient(90deg, #673AB7 0%, #512DA8 100%);
     border-radius: 6px;
  ` 
  const NoteBlock = styled.div`
     margin-top: 10px;
     width: 100%;
     display: flex;
     justify-content: flex-start;
  ` 
  const GetBlockHeadText = styled(Text)`
     margin: 9px 0 0 9px;
     font-family: Roboto;
     font-size: 16px;
     color: #FFF;
     font-weight: 500;
     display: flex;
     justify-content: flex-start;
  ` 

  const MoreSymbolSection = styled.div`
     width: 30px;
     height: 90px;
     margin-top: -35px;
     display: block
  ` 
  const DividerBlock = styled.div`
     width: 10px;
     height: 20px;
     margin: 10px;
     border-left: 1px solid #FFFFFF;
  ` 

  const StyledCard = styled(Card)`
     position: fixed;
     top: 300px;
     left: 300px;
     width: 300px;
     min-height: 300px;
     z-index: 199;
     display: none;

     &.active {
        display: block
     }
  `

  const StyledCardOverlay = styled.div`
     position: fixed;
     top: 0px;
     left: 0px;
     width: 100%;
     height: 100%;
     background: #2D2D2D;
     opacity: 0.7;
     z-index: 190;
     display: none;

     &.active {
       display: block
     }
  `

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="space-between">
      <ReferralBox> 
        <RefContent>
          <HeadingRow>
            <RefHeading as="h5" scale="md" color="invertedContrast">
            {t('My Referral Link')}
            </RefHeading>
            <RefAddLink>
               <Text 
                  onClick={LinkCreationStart}
                  color="textSubtle" fontSize="16px" fontFamily="Roboto" fontWeight="700">
                  Create new link</Text><PlusIcon width="26px" height="26px" mb="10px" />
            </RefAddLink>
          </HeadingRow>
          <LinkBlock>
            <RefInput type="text" value={referralLink} />
            <CopyIcon width="29px" height="29px" />
            <ShareBlock>
              <ShareReferralIcon width="29px" height="29px" mt="6px" ml="4px" />
            </ShareBlock>
          </LinkBlock>
          <YoullGetBlock>
              <YouGetSection>
                <GetBlockHeadText>You will get</GetBlockHeadText>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <GoldPercentText>100 %</GoldPercentText>
                  <MoreSymbolSection>
                    <DividerBlock />
                      <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M2 28L13 15L2 2" stroke="#F8D300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M12 28L22 15L12 2" stroke="#F8D300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    <DividerBlock />
                  </MoreSymbolSection>
                  <Text color="#FFFFFF" mr="40px" mt="9px">Swaps <b>10%</b></Text>
                </div>
              </YouGetSection>
              <FriendsGetSection>
                <GetBlockHeadText>Friends will get</GetBlockHeadText>
                <GoldPercentText>0 %</GoldPercentText>
              </FriendsGetSection>
          </YoullGetBlock>
          <NoteBlock onClick={NoteCreationStart}>
            <PencilReferralIcon width="28px" height="28px" />
            <Text color="textSubtle" fontSize="16px" fontFamily="Roboto" fontWeight="300" ml="5px" mt="5px">Note</Text>
          </NoteBlock>
        </RefContent>
      </ReferralBox>
    </Flex>
  )
}

export default PersonalLinkBlock
