import React from 'react'
import styled from 'styled-components'
import { Card, Box, Flex, Heading, Text, SubtractIcon } from 'vorpaltesttoolkit'
import Page from 'components/Layout/Page'
import BorderedHeading from 'components/HeadingBorder'
import ReferralHero from './components/ReferralHero'
import FaqSection from './office/components/faq'
import { Boards, Room } from './office/components/OfficeToolkit'

const PromoPage = () => {

    const Promo = styled(Page)`
       margin: 0 auto;
       width: 100%;
       max-width: 1600px;
       min-height: 600px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    ` 
    
    return (
      <>
        <Promo>
          <ReferralHero isLogin={false} />
        </Promo>
        <Room>
          <Boards>
            <FaqSection />
          </Boards>
        </Room>
      </>
    )
  }
  
  export default PromoPage