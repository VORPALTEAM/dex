import React, {useState} from 'react'
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
import useTheme from 'hooks/useTheme'
import BorderedHeading from 'components/HeadingBorder'
import { GoldPercentText } from '../StyledElms'


const EditNote = () => {

    const { theme } = useTheme()
    const [popupActive, useActive] = useState(1)
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
    const closeWindow = () => {
      useActive(0)
    }
    return (
       <StyledCard className={popupActive ? "active" : ""}>
        <ModalHeader background={theme.colors.gradients.bubblegum}>
          <Flex alignItems="center" style={{ flex: 1 }}>
            <Box>
              <Heading scale="lg" mb="8px">
                EDIT NOTE
              </Heading>
            </Box>
            <IconButton variant="text" aria-label="Close the dialog" onClick={closeWindow}>
              <CloseIcon color="text" width="24px" />
            </IconButton>
          </Flex>
      </ModalHeader>
        <BorderedHeading />
      </StyledCard>
      )
}

export default EditNote;