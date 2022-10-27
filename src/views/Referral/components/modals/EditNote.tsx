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
       <StyledCard className={popupActive ? "active" : ""}>
        <ModalHeader background="linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <Box>
              <Heading scale="lg" mb="8px">
                EDIT NOTE
              </Heading>
            </Box>
            <IconButton variant="text" aria-label="Close the dialog" onClick={CloseWindow}>
              <CloseIcon color="text" width="24px" />
            </IconButton>
          </Flex>
      </ModalHeader>
        <BorderedHeading />
      </StyledCard>
      )
}

export default EditNote;