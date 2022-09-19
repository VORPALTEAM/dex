import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BunnyPlaceholderIcon, Flex, Box, Button, Text, ClockAgainst, AskIcon } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'

const WithdrawSection = () => {

    const WithdrawWindow = styled.div`
      float: right;
      width: 20%;
      min-width: 440px;
      min-height: 220px;
      background: #E0EAFC;
      background-image: url('/images/referral/withdraw_vorpal.png');
      background-repeat: no-repeat;
      background-position: right bottom;
      border-radius: 20px;
      overflow: hidden;
    `

    const AscBlock = styled.div`
      display: flex;
      margin-left: 12px;
      margin-top: -6px;
      background: #F8D300;
      border-radius: 20px;
    `

    const StyledButton = styled(Button)`
       width: 160px;
       height: 40px;
       background: #353547;
       color: ${({ theme }) => theme.colors.textDisabled};
       font-size: 18px;
        border-radius: 6px;
    `

    return (
        <Flex position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        width="100%"
        justifyContent="flex-end"
        id="referral-hero">
            <WithdrawWindow>
                <Flex mt="20px" ml="20px">
                    <Text fontWeight="700">Swaps Referral</Text>
                    <AscBlock>
                        <Text fontWeight="700" ml="12px" mt="6px">10%</Text>
                        <AskIcon color="tertiary" ml="4px" mt="-4px" mr="12px" />
                    </AscBlock>
                    <ClockAgainst width="37px" height="34px" mt="-4px" ml="25%" />
                    <Text ml="6px">History</Text>
                </Flex>
                <Text ml="20px" mt="20px" fontSize="32px" fontWeight="700" width="100%">0.0000 VRP</Text>
                <StyledButton mt="40px" ml="20px">
                    Withdraw
                 </StyledButton>
            </WithdrawWindow>
        </Flex>
      )
}

export default WithdrawSection;