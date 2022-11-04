import React from 'react'
import styled from 'styled-components'
import { Card, Box, Flex, Heading, Text, SubtractIcon } from 'vorpaltesttoolkit'
import Page from 'components/Layout/Page'
import BorderedHeading from 'components/HeadingBorder'
import ReferralHero from './components/ReferralHero'
import FaqSection from './office/components/faq'
import { Boards, Room, TabHeadingSection } from './office/components/OfficeToolkit'
import { AscBlock } from './components/StyledElms'
import PromoItem from './components/promo/item'
import { steps } from './components/promo/data'

const PromoPage = () => {

    const Promo = styled(Page)`
       margin: 0 auto;
       width: calc(100% - 64px);
       max-width: 1600px;
       min-height: 600px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    ` 

    const PromoList = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
    `
    const InviterBlock = styled.div`
       width: 325px;
       height: 40px;
       margin-top: 6px;
       background: #1A192E;
       backdrop-filter: blur(39.4151px);
       border-radius: 29px;
       display: flex;
    ` 

    const promoSteps = []

    steps.forEach((step) => {
      promoSteps.push(
       <PromoItem 
        key={step.id * 4}
        item={step} 
       />)
    })
    
    return (
      <>
        <Promo>
          <ReferralHero isLogin={false} />
        </Promo>
        <Room>
          <Boards>
            <TabHeadingSection>
              <Text color="#FFFFFF" fontWeight="500" fontSize="32px">How to invite friends</Text>
              <InviterBlock>
                <Text mt="8px" ml="42px" color="#FFFFFF" fontWeight="400" fontSize="16px">My inviter:   318asd...rwhe</Text>
                <AscBlock style={{
                  maxHeight: 28,
                  width: 65,
                  marginTop: 5,
                  marginLeft: 38
                }}>
                  <Text fontWeight="700" ml="18px" mt="2px">10%</Text>
                </AscBlock>
              </InviterBlock>
            </TabHeadingSection>
            <PromoList>
              {promoSteps}
            </PromoList>
            <FaqSection />
          </Boards>
        </Room>
      </>
    )
  }
  
  export default PromoPage