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
         ModalHeader, 
         RoundAskIcon,
         PencilReferralIcon,
         CheckInCheckBox } from 'vorpaltesttoolkit'
import BorderedHeading from 'components/HeadingBorder'
import { GoldPercentText } from '../StyledElms'
import { selectWindow } from '../../state/modalReducer'
import {RefModalWindow, 
  RefStyledCard, 
  CloseButton, 
  RefModalHeading, 
  RefModalBody,
  StyledButton,
  NoteInput,
  NoteHint } from './common'

const GenerateLink = () => {

    const [boxChecked, checkBox] = useState(true)
    const dispatch = useDispatch()

    const CloseWindow = () => {
      dispatch(selectWindow("none"))
    }

    const CheckAsDefault = () => {
      checkBox(!boxChecked)
    }

    const PercentSection = styled.div`
       width: 100%;
       display: flex;
       justify-content: space-between;

       .percent--right {
         padding-right: 24px;
       }
    `

    const ValueSection = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       min-height: 40px;
       background: rgba(53, 47, 68, 0.1);
       border-radius: 6px;
    `

    const PercentBtns = styled.div`
       width: 100%;
       display: flex;
       justify-content: space-between;
       min-height: 40px;
       margin-top: 20px;
    `

    const CheckBoxPlace = styled.div`
       width: 30px;
       height: 30px;
       background: rgba(53, 47, 68);
       border-radius: 6px;
    `

    return (
       <RefModalWindow className="active">
        <ModalHeader background="transparent">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <RefModalHeading title="Generate your link" />
            <CloseButton onClick={CloseWindow} marginLeft={320} />
          </Flex>
      </ModalHeader>
      <RefModalBody style={{
        padding: "17px 28px"
      }}>
          <Text fontSize="14px" fontWeight="400" color="tetriary">
            Profit sharing allows you to share a portion of referral rewards with your invited friends
          </Text>
         <BorderedHeading style={{
            padding: 8
         }} />
         <PercentSection>
            <div className="percent--left">
              <Text fontSize="14px" fontWeight="400" color="tetriary">
                You receive <RoundAskIcon stroke="#352F44" style={{
                  position: 'absolute',
                  marginLeft: 4
                }} />
              </Text>
              <Text fontSize="64px" fontWeight="400" color="#2A2338">100%</Text>
            </div>
            <div className="percent--right">
              <Text fontSize="12px" fontWeight="300">
                Friends receive <RoundAskIcon stroke="#352F44" style={{
                  position: 'absolute',
                  marginLeft: 4
                }} />
              </Text>
              <Text fontSize="64px" fontWeight="400" color="#2A2338">0%</Text>
            </div>
         </PercentSection>
         <ValueSection>
            <Text>Swap <b>10%</b></Text>
         </ValueSection>
         <PercentBtns>
            <StyledButton width="22%" disabledStyle={0} onClick={CloseWindow} btnText="0%" />
            <StyledButton width="22%" disabledStyle={0} onClick={CloseWindow} btnText="10%" />
            <StyledButton width="22%" disabledStyle={0} onClick={CloseWindow} btnText="25%" />
            <StyledButton width="22%" disabledStyle={0} onClick={CloseWindow} btnText="50%" />
         </PercentBtns>
         <NoteInput type="text" style={{
            marginTop: 20
          }} />
         <NoteHint>
           <PencilReferralIcon width="28px" height="28px" color="black" stroke="black" />
           <Text ml="4px" mt="4px" fontWeight="600" fontSize="14px">Note</Text>
         </NoteHint>
         <Flex className="check--box" style={{
            marginTop: 20
          }}>
            {!boxChecked ? <CheckBoxPlace onClick={CheckAsDefault} /> : 
            <CheckBoxPlace  onClick={CheckAsDefault}>
              <CheckInCheckBox stroke="#ACF800" style={{
                marginTop: 7,
                marginLeft: 4
              }} />
            </CheckBoxPlace>}
            <Text ml="4px" mt="4px" fontWeight="600" fontSize="14px">
              Set as default invitation code
            </Text>
         </Flex>
         <div className="Buttons" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20
         }}>
          <StyledButton width="100%" disabledStyle={0} onClick={CloseWindow} btnText="Generate a referral link" />
          <PlusIcon style={{
            position: 'absolute',
            marginRight: 215
          }} onClick={CloseWindow} />
         </div>
      </RefModalBody>
      </RefModalWindow>
      )
}

export default GenerateLink;