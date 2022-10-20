import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { Provider } from 'react-redux';
import ReferralHero from './components/ReferralHero'
import WithdrawSection from './components/WithdrawSection'
import Office from './office'
import store from './state'

// console.log(document.location)

const Referral = () => {
  const OfficePage = styled(Page)`
    margin: 0 auto;
    width: calc(100% - 64px);
    max-width: 1600px;
    min-height: 100px;
  ` 

console.log(<Provider store={store} />)

  return (
    <>
     <OfficePage>
        <ReferralHero />
        <WithdrawSection />
      </OfficePage>
      <Office />
    </>
  )
}

export default Referral
