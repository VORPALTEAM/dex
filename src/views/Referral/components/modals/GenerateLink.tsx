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
         RoundAskIcon } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'
import BorderedHeading from 'components/HeadingBorder'
import { GoldPercentText } from '../StyledElms'
import { selectWindow } from '../../state/modalReducer'
import {RefModalWindow, 
  RefStyledCard, 
  CloseButton, 
  RefModalHeading, 
  RefModalBody,
  StyledButton } from './common'

const GenerateLink = () => {

    const [popupActive, useActive] = useState(1)
    const dispatch = useDispatch()

    const CloseWindow = () => {
      dispatch(selectWindow("none"))
    }
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

    const PercentSection = styled.div`
       width: 100%;
       display: flex;
       justify-content: space-between;
    `

        return (
       <RefModalWindow className={popupActive ? "active" : ""}>
        <ModalHeader background="transparent">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <RefModalHeading title="Generate your link" />
            <CloseButton onClick={CloseWindow} marginLeft={320} />
          </Flex>
      </ModalHeader>
      <RefModalBody style={{
        padding: "17px 28px"
      }}>
          <Text fontSize="12px" fontWeight="300" mb="17px">
            Profit sharing allows you to share a portion of referral rewards with your invited friends
          </Text>
         <BorderedHeading />
         <PercentSection>
            <div className="percent--left">
              <Text fontSize="12px" fontWeight="300" mb="17px">
                You receive <RoundAskIcon stroke="#352F44" />
              </Text>
            </div>
            <div className="percent--right">
              <Text fontSize="12px" fontWeight="300" mb="17px">
                Friends receive <RoundAskIcon stroke="#352F44" />
              </Text>
            </div>
         </PercentSection>
         <div className="Buttons" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 40
         }}>
             <StyledButton width="48%" disabledStyle={1} onClick={CloseWindow} btnText="Cancel" />
             <StyledButton width="48%" disabledStyle={0} onClick={CloseWindow} btnText="Confirm" />
         </div>
      </RefModalBody>
      </RefModalWindow>
      )
}

export default GenerateLink;