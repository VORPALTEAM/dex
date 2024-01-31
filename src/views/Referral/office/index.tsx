import React from 'react'
import { AutoRenewIcon, Flex, Heading } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import BorderedHeading from 'components/HeadingBorder'
import orderBy from 'lodash/orderBy'
import OfficeMenu from './components/OfficeMenu'
import HomeSection from './components/HomeSection'
import SwapSection from './components/SwapSection'
import LinkSection from './components/LinkSection'
import AboutSection from './components/AboutSection'
import { Room } from './components/OfficeToolkit'
// console.log(document.location)

const tabs = [{
    tab: "Referral list",
    href: "home",
    section: <HomeSection />
  }, {
    tab: "Swaps",
    href: "swaps",
    section: <SwapSection />
  }, {
    tab: "Referral links",
    href: "links",
    section: <LinkSection />
  }, {
    tab: "About",
    href: "about",
    default: <AboutSection />
  }]

const Office = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const activeTab = urlParams.get('tab') || "home";

  let currentSection = (activeTab === "home" || !activeTab) ? tabs[0].section : null

  tabs.forEach((tab) => {

    if (tab.href === activeTab) {
        currentSection = tab.section
    }
  })

  return (
    <Room>
        <OfficeMenu tabs={tabs} active={activeTab} />
        {currentSection}
        <BorderedHeading />
    </Room>
  )
}

export default Office