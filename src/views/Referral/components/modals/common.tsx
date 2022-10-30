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

export const RefModalWindow = styled.div`
   position: fixed;
   top: 266px;
   left: calc(50% - 277px);
   width: 554px;
   min-height: 300px;
   background: linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%);
   border-radius: 40px;
   z-index: 199;
   display: none;

   &.active {
     display: block;
   }
`
export const RefStyledCard = styled(Card)`
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

export const CloseButton = ({ onClick }) => {
   const CloseBtn = styled(IconButton)`
      position: absolute;
      margin-left: 278px;
      margin-top: 8px;
   `
   return(
      <CloseBtn variant="text" aria-label="Close the dialog" onClick={onClick}>
        <CloseIcon color="text" width="24px" />
      </CloseBtn>
   )
}

export const RefModalHeading = ({ title }) => {
   const RefHeading = styled(Text)`
      color: #2A2338;
      font-family: RoundsBlack;
   `

   return(
      <Box>
       <RefHeading mb="16px" fontSize="18px" fontWeight="400">
          {title}
       </RefHeading>
      </Box>
   )
}