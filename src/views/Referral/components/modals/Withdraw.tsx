import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Card, 
         Flex, 
         Button, 
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

const WithdrawModal = () => {


  const dispatch = useDispatch()

  const CloseWindow = () => {
    dispatch(selectWindow("none"))
  }

  const WithdrawNumberInput = styled.input`
     width: 100%;
     height: 60px;  
     background: #FFFFFF;
     border: 1px solid #FFFFFF;
     border-radius: 6px;
     box-shadow: 0px 0px 5px 1px #D3CEE0, inset 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  `

  const WithdrawAllBtn = styled(Button)`
     position: absolute;
     height: 52px;  
     margin-top: 4px;
     margin-left: -132px;
     background: #352F44;
     color: #FFFFFF;
     font-size: 18px;
     border-radius: 6px;
     text-transform: none;
  `

  return (
     <RefModalWindow className="active">
      <ModalHeader background="transparent">
        <Flex alignItems="center" style={{ flex: 1 }}>
          <RefModalHeading title="Withdraw" />
          <CloseButton onClick={CloseWindow} />
        </Flex>
    </ModalHeader>
    <RefModalBody  style={{
        padding: "20px 24px"
     }}>
       <WithdrawNumberInput type="number" value={0} />
       <WithdrawAllBtn width="23%" disabledStyle={0} onClick={CloseWindow}>
         All
       </WithdrawAllBtn>
       <Text fontSize="12px" fontWeight="300" mt="10px">Withdrawal fee: 0.5 VRP</Text>
       <div className="Buttons" style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 40
       }}>
           <StyledButton width="100%" disabledStyle={0} onClick={CloseWindow} btnText="Withdraw" />
       </div>
    </RefModalBody>
    </RefModalWindow>
    )
}

export default WithdrawModal;