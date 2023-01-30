import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { State } from 'state/types'
import { windowNames } from 'state/referral'
import { refSelectWindow } from 'state/actions'
import VideoModal from './video'

const ModalContainer = () => {

    const mState = useSelector((state: State) => {
        return state
      })
    
    const modalR = mState.modal

    const dispatch = useDispatch()

    const OverlayClose = () => {
      dispatch(refSelectWindow(windowNames.none))
    }

    function currentWindow ( windowName: string ) {
      switch (windowName) {
        case windowNames.video :
          return <VideoModal />
        default: 
          return null;
      }
    }

    return(
        <>
          {currentWindow(modalR)}
          <div className={modalR && modalR !== windowNames.none ? "modal--overlay active" : "modal--overlay"} aria-hidden="true" onClick={OverlayClose} onKeyDown={OverlayClose} />
        </>
    )
}

export default ModalContainer