import React, { useEffect } from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { Provider as ModalProvider, useSelector } from 'react-redux';
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import ReferralHero from './components/ReferralHero'
import WithdrawSection from './components/WithdrawSection'
import Office from './office'
import store from './state'
import { FindState } from '../../state/referral/hooks'
import ModalRefContainer from './components/modals'
import PromoPage from './promo'
import { State } from '../../state/types'

const Referral = () => {
  const { account } = useActiveWeb3React()
  // const parentStates = useSelector((state : State) => state)


  try {
    console.log(document.location.hostname)
  } catch (e) {
    console.log(e)
  }

  // console.log(FindState())


  const OfficePage = styled(Page)`
    margin: 0 auto;
    width: calc(100% - 64px);
    max-width: 1600px;
    min-height: 100px;
  ` 
    
  return (
    <>
      {!account ? <PromoPage  /> : 
      <><OfficePage>
        <ModalProvider store={store}>
          <div onLoad={FindState} />
          <ReferralHero account={account} />
          <WithdrawSection />
          <ModalRefContainer />
        </ModalProvider>
      </OfficePage>
      <Office />
      </>}
    </>
  )
}

export default Referral
