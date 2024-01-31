import React, { useEffect } from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { Provider as ModalProvider, useSelector } from 'react-redux';
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { State } from '../../state/types'

const Funding = () => {
  const { account } = useActiveWeb3React()
  // const parentStates = useSelector((state : State) => state)


  try {
    console.log(document.location.hostname)
  } catch (e) {
    console.log(e)
  }


  return (
    <Page />
  )
}

export default Funding
