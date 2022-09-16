import React from 'react'
import { AutoRenewIcon, Flex, Heading } from 'vorpaltesttoolkit'
import orderBy from 'lodash/orderBy'
import Page from 'components/Layout/Page'
import Layout from './layout'
import ReferralHero from './components/ReferralHero'

// console.log(document.location)

const Referral = () => {

  return (
    <Page>
      <Flex alignItems="center" justifyContent="space-between" mb="32px">Layout:</Flex>
      <ReferralHero />
      <Layout />
    </Page>
  )
}

export default Referral
