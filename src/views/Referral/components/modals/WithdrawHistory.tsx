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

const WithdrawHistory = () => {


  const dispatch = useDispatch()

  const CloseWindow = () => {
    dispatch(selectWindow("none"))
  }

  const WithdrHistoryEmpty = styled.div`
     width: 100%;
     padding: 20px 24px;
     min-height: 200px;  
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
  `

  return (
     <RefModalWindow className="active">
      <ModalHeader background="transparent">
        <Flex alignItems="center" style={{ flex: 1 }}>
          <RefModalHeading title="Withdraw" />
          <CloseButton onClick={CloseWindow} />
        </Flex>
    </ModalHeader>
    <WithdrHistoryEmpty>
       No data
    </WithdrHistoryEmpty>
    </RefModalWindow>
    )
}

export default WithdrawHistory;