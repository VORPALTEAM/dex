import React from 'react'
import { AutoRenewIcon, Flex, Box, Heading, Text, AskIcon } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import Page from 'components/Layout/Page'
import orderBy from 'lodash/orderBy'
import { AscBlock } from '../../components/StyledElms'
import { Boards, Board, HeadingSection } from './OfficeToolkit'
import FaqSection from './faq'

// console.log(document.location)

const HomeSection = () => {

  const DashboardWindow = styled.div`
    width: 100%;
    min-height: 100px;
    background: linear-gradient(90deg, #614385 0%, #516395 100%);
    border-radius: 20px;
  ` 
  const DashboardHeading = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background: transparent;
   ` 

   const InviterSearch = styled.div`
     width: 420px;
     height: 20px;
     border-radius: 20px;
     display: flex;
     background: #2A2338;
    ` 
    const CounterSection = styled(Flex)`
       width: 50%;
       padding: 20px;
       min-height: 100px;
    `
    const CounterContainer = styled(Flex)`
       width: 100%;
       border-right: 1px solid #FFFFFF;
    `

    const FriendsBox = styled(Box)`
       width: 60%;
       padding: 16px;
       border-radius: 10px;
       background: #2A2338;
    `
    const RowFlex = styled(Flex)`
      padding: 10px;
    `

    const StatsBox = styled(Box)`
      width: 20%;
      padding-top: 16px;
    `


    const LightIcon = () => {
      return(
        <svg viewBox="0 0 41 41" width="41" height="41">
          <circle fill="#D9D9D9" cx="20" cy="20" r="20" />
        </svg>
      )
    }

  return (
    <Boards>
        <DashboardWindow>
            <DashboardHeading>
                <Text color="invertedContrast" fontSize="32px" fontWeight="700">Dashboard</Text>
                <InviterSearch>
                    <AskIcon color="#FFFFFF" />
                    <Text color="textSubtle" fontSize="16px" fontWeight="300" ml="4px">
                        <span style={{opacity: 0.3}}>My inviter: </span>biswap.org/?ref=4ded6d5...
                    </Text>
                    <AscBlock style={{height: 18, float: 'right', marginTop: 1, marginLeft: 60}}>
                        <Text fontWeight="500" ml="20px" mr="20px" mt="-2px">10%</Text>
                    </AscBlock>
                </InviterSearch>
            </DashboardHeading>
            <CounterSection>
              <CounterContainer>                 
                <FriendsBox>
                  <RowFlex>
                    <LightIcon />
                    <Box>
                      <Text color="contrast" fontSize="12px" fontWeight="300" ml="5px" mr="5px" mt="1px">Friends</Text>
                      <Text color="contrast" fontWeight="500" ml="5px" mr="5px" mt="1px">0</Text>
                    </Box>
                  </RowFlex>
                  <RowFlex>
                    <LightIcon />
                    <Box>
                      <Text color="contrast" fontSize="12px" fontWeight="300" ml="5px" mr="5px" mt="1px">Total earned</Text>
                      <Text color="contrast" fontWeight="500" ml="5px" mr="5px" mt="1px">0.0000 VRP</Text>
                    </Box>
                    <AskIcon color="#FFFFFF" style={{
                      position: 'relative',
                      marginTop: -150,
                      marginLeft: 75
                    }} />
                  </RowFlex>
                </FriendsBox>
                <StatsBox>
                  <RowFlex>
                    <Box>
                      <Text color="contrast" fontSize="12px" fontWeight="300" ml="5px" mr="5px" mt="1px">Total Swap friends</Text>
                      <Text color="contrast" fontWeight="500" ml="5px" mr="5px" mt="1px">0/0</Text>
                    </Box>
                  </RowFlex>
                  <RowFlex>
                    <Box>
                      <Text color="contrast" fontSize="12px" fontWeight="300" ml="5px" mr="5px" mt="1px">Total Swap earned</Text>
                      <Text color="contrast" fontWeight="500" ml="5px" mr="5px" mt="1px">0.0000 VRP</Text>
                    </Box>
                  </RowFlex>
                </StatsBox>
              </CounterContainer>
            </CounterSection>
        </DashboardWindow>
        <HeadingSection title="Referral List" subTitle="All your referral friends in one place" />
        <Board>
           <Text color="contrast" fontWeight="500" ml="46%" pt="140px">No data</Text>
        </Board>
        <FaqSection />
    </Boards>
  )
}

export default HomeSection