import React from 'react'
import { AutoRenewIcon, Flex, Heading, Text, AskIcon } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import Page from 'components/Layout/Page'
import orderBy from 'lodash/orderBy'
import { AscBlock } from '../../components/StyledElms'

// console.log(document.location)

const HomeSection = () => {

  const DashboardWindow = styled.div`
    width: 100%;
    min-height: 100px;
    background: linear-gradient(90deg, #614385 0%, #516395 100%);
    border-radius: 20px;
  ` 
  const Boards = styled(Page)`
    margin: 0 auto;
    width: calc(100% - 64px);
    max-width: 1600px;
    min-height: 200px;
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
     ;
    ` 

    const InviterSearchText = styled(Text)`

     &.text--hint {
        opacity: 0.3;
     }
    ` 

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
        </DashboardWindow>
    </Boards>
  )
}

export default HomeSection