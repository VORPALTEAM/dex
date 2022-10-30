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
import { GoldPercentText } from '../StyledElms'
import { selectWindow } from '../../state/modalReducer'
import {RefModalWindow, RefStyledCard, CloseButton, RefModalHeading} from './common'

const EditNote = () => {

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

    return (
       <RefModalWindow className={popupActive ? "active" : ""}>
        <ModalHeader background="transparent">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <RefModalHeading title="EDIT NOTE" />
            <CloseButton onClick={CloseWindow} />
          </Flex>
      </ModalHeader>
      </RefModalWindow>
      )
}

export default EditNote;