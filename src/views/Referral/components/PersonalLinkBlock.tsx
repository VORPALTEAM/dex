import React, {useState, useEffect, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Card, 
         Flex, 
         Box, 
         Heading, 
         Text, 
         PlusIcon, 
         PencilReferralIcon } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'
import { GoldPercentText } from './StyledElms'
import { selectWindow, setIds, RootState } from '../state/modalReducer'
import PersonalLink from './PersonalLink'
import * as Hooks from '../hooks'
import * as DevHooks from '../hooks/dev'
import CopyModal from './notify/copyModal'
import { defaultCreatorPercent, defaultReferralPercent } from '../config'

const PersonalLinkBlock = ({ account }) => {
  const { t } = useTranslation()

  const State = useSelector((state: RootState) =>{
     return state
  })

  const [isRequested, setActive] = useState(false)
  const [clientAccount, setClientAccount] = useState(account)
  const [referralIds, setReferralIds] = useState([])
  const dispatch = useDispatch()

  const LinkCreationStart = () => {
    dispatch(selectWindow("link"))
    setActive(true)
  }

  const NoteCreationStart = () => {
    dispatch(selectWindow("note"))
    setActive(true)
  }

  async function handleStatusChange () {
    if (!isRequested) {

      const refLinks = await DevHooks.RequestLinks(clientAccount)

      console.log(refLinks)

      try {
        let linkArray = Array.from(refLinks.result)

        const links : string[] = []

        if (linkArray.length < 1) {
          const newLink = await DevHooks.CreateLink (clientAccount, defaultCreatorPercent, defaultReferralPercent)
          const newRefLinks = await DevHooks.RequestLinks(clientAccount)
          linkArray = Array.from(newRefLinks.result)
        }

        linkArray.forEach((lnk : any) => { 
          links.push(lnk.link_key) 
        })

        setReferralIds(links)
        dispatch(setIds(links))

      } catch (e : any) {
         console.log(e.message)
      }

      setActive(true)
    }
  }

  useEffect(() => {

    handleStatusChange()
  })

  /* RequestLinks(account).then((res) => {
    setReferralIds(res)
  }) */

  /* RoughRequestLinks(account).then((res) => {
    setReferralIds(res)
  }) */

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

  const TestF = () => {
    console.log("test")
  }

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
          {State.refLinks.map((ref) => {
             return <PersonalLink linkId={ref} />
          })}
          <YoullGetBlock>
              <YouGetSection>
                <GetBlockHeadText>You will get</GetBlockHeadText>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <GoldPercentText>{defaultCreatorPercent}%</GoldPercentText>
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
                <GoldPercentText>{defaultReferralPercent}%</GoldPercentText>
              </FriendsGetSection>
          </YoullGetBlock>
          <NoteBlock onClick={NoteCreationStart}>
            <PencilReferralIcon width="28px" height="28px" color="white" stroke="white" />
            <Text color="textSubtle" fontSize="16px" fontFamily="Roboto" fontWeight="300" ml="5px" mt="5px">Note</Text>
          </NoteBlock>
        </RefContent>
      </ReferralBox>
    </Flex>
  )
}

export default PersonalLinkBlock
