import React from 'react'
import { AutoRenewIcon, Flex, Heading } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import orderBy from 'lodash/orderBy'
import Page from 'components/Layout/Page'
import Layout from './layout'
import ReferralHero from './components/ReferralHero'
import WithdrawSection from './components/WithdrawSection'

// console.log(document.location)

const Referral = () => {
  const CabinetPage = styled(Page)`
    margin: 0 auto;
    width: calc(100% - 64px);
    max-width: 1600px
  ` 
  return (
    <CabinetPage>
      <ReferralHero />
      <WithdrawSection />
      <Layout />
    </CabinetPage>
  )
}

export default Referral
