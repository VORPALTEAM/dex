import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Card, 
         Flex, 
         CloseIcon, 
         Box, 
         Heading, 
         Text, 
         Button,
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
        StyledButton } from './common'

const EditNote = () => {

    const [popupActive, useActive] = useState(1)
    const dispatch = useDispatch()

    const CloseWindow = () => {
      dispatch(selectWindow("none"))
    }

    const NoteInput = styled.input`
        width: 100%;
        height: 40px;
        border: none;
        background: #352F4433; 
    `

    const NoteHint = styled.div`
       position: absolute;
       display: flex;
       margin-top: -34px;
       margin-left: 4px;
    `

    return (
       <RefModalWindow className={popupActive ? "active" : ""}>
        <ModalHeader background="transparent">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <RefModalHeading title="EDIT NOTE" />
            <CloseButton onClick={CloseWindow} />
          </Flex>
      </ModalHeader>
      <RefModalBody>
        <NoteInput type="text" />
         <NoteHint>
           <PencilReferralIcon width="28px" height="28px" color="black" stroke="black" />
           <Text ml="4px" mt="4px" fontWeight="600" fontSize="14px">Note</Text>
         </NoteHint>
         <Text fontSize="12px" fontWeight="300" mt="10px">Make a note and test the profit sharing percentage to get the most out of it</Text>
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

export default EditNote;