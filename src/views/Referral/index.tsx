import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { Provider as ModalProvider } from 'react-redux';
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import ReferralHero from './components/ReferralHero'
import WithdrawSection from './components/WithdrawSection'
import Office from './office'
import store from './state'
import ModalRefContainer from './components/modals'
import PromoPage from './promo'


const Referral = () => {
  const { account } = useActiveWeb3React()

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
          <ReferralHero />
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
