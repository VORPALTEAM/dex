import React from 'react'
import { AutoRenewIcon, Flex, Heading } from 'vorpaltesttoolkit'
import orderBy from 'lodash/orderBy'
import { useTeams } from 'state/teams/hooks'
import { useTranslation } from 'contexts/Localization'

const Layout = () => {

  return (
    <div>
      <div className="hero--section">Heading, referral link, total card</div>
      <div className="history--section">
        <div className="history--menu">Referral list, Swaps</div>
        <div className="history--dashboard">Dashboard</div>
        <div className="history--list">Referral List</div>
      </div>
    </div>
  )
}

export default Layout
