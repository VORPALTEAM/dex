import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import EditNote from './EditNote'
import GenerateLink from './GenerateLink'
import WithdrawModal from './Withdraw'
import WithdrawHistory from './WithdrawHistory'
import { selectWindow } from '../../state/modalReducer'
 
const ModalRefContainer = () => {

    const modalR = useSelector(state => state)
    const dispatch = useDispatch()

    const OverlayClose = () => {
      dispatch(selectWindow("none"))
    }

    const StyledCardOverlay = styled.div`
       position: fixed;
       top: 0px;
       left: 0px;
       width: 100%;
       height: 100%;
       background: #2D2D2D;
       opacity: 0.7;
       z-index: 190;
       display: none;

       &.active {
         display: block
       }
    `

    function currentWindow ( windowName ) {
      switch (windowName) {
        case "note" :
          return <EditNote />
          break;
        case "withdraw" :
          return <WithdrawModal />
          break;
        case "link" :
          return <GenerateLink />
          break;
        case "history" :
          return <WithdrawHistory />
          break;
        default: 
          return null;
      }
    }

    return(
        <>
          {currentWindow(modalR)}
          <StyledCardOverlay onClick={OverlayClose} className={modalR && modalR !== "none" ? "active" : ""} />
        </>
    )
}

export default ModalRefContainer