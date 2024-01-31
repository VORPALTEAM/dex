import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import copy from 'copy-to-clipboard';
import { ShareReferralIcon, 
         CopyClipboardIcon } from 'vorpaltesttoolkit'

const CopyModal = () => {

    const CopyWindow = styled.div`
      position: fixed;
      z-index: 699;
      bottom: 10%;
      right: 10%;
      width: 333px;
      height: 76px;
      border-radius: 20px;
      background: linear-gradient(90deg, #E0EAFC 0%, #CFDEF3 100%);
      display: none; /* temporary! */
    `

    const CloseIcon = styled.div`
        margin: 20px;
        width: 20px;
        height: 20px
        border-radius: 40px;
        background: #352F44;

    `

    return(<CopyWindow className="copy--modal">
        ok
        <CloseIcon />
    </CopyWindow>)
}

export default CopyModal