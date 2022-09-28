import React from 'react'
import { AutoRenewIcon, Flex, Box, Heading, Text } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'

const FaqItem = ({question,  answer}) => {

    const FaqHeading = styled(Box)`
       width: 48%;
       height: 60px;
       background: #352F44;
       color: #F1F6F9;
       border-radius: 20px;
       margin-top: 20px;
       padding: 20px;

       &.faq--answer {
         display: none;
       }

       &.opened {
         height: 130px;
         color: #ACF800;
       }

       &.opened .faq--answer {
        display: block;
        color: #F1F6F9;
      }
    `

    const FaqAnswer = styled(Text)`
       display: none;

       &.opened {
        display: block;
       }
    `

    return(
        <FaqHeading>
            <div>{question}</div>
            <FaqAnswer className="closed">{answer}</FaqAnswer>
        </FaqHeading>
    )
}

export  default FaqItem;