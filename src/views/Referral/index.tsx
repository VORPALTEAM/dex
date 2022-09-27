import React from 'react'
import { AutoRenewIcon, Flex, Heading } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import orderBy from 'lodash/orderBy'
import Page from 'components/Layout/Page'
import ReferralHero from './components/ReferralHero'
import WithdrawSection from './components/WithdrawSection'
import Office from './office'

// console.log(document.location)

const Referral = () => {
  const OfficePage = styled(Page)`
    margin: 0 auto;
    width: calc(100% - 64px);
    max-width: 1600px;
    min-height: 100px;
  ` 
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
