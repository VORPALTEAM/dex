import React, {useState} from 'react'
import { ArrowDownWhiteIcon, Flex, Box, Heading, Text } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'

const FaqItem = ({question,  answer}) => {

  const[active, setState] = useState(0)

  const setup = () => {
    setState(active ? 0 : 1)
  }
  
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

      svg {
        fill: #EBEBEB;
      }

      &.opened svg {
        transform: rotateZ(180deg);
      }
    `

    const FaqAnswer = styled(Text)`
       display: none;
       color: #F1F6F9;

       &.opened {
        display: block;
       }
    `

    const Aicon = () => {
      return(
        <svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 0C4.74546 0 4.94961 0.176875 4.99194 0.410124L5 0.5V4H8.46314C8.72999 4 8.95137 4.19469 8.99297 4.44978L9 4.53686C9 4.6202 8.9806 4.7024 8.94332 4.77695L4.98024 12.7031C4.84764 12.9683 4.52517 13.0758 4.25997 12.9432C4.15607 12.8913 4.07183 12.807 4.01988 12.7031L0.0567954 4.77695C-0.0758032 4.51175 0.0316892 4.18928 0.296886 4.05668C0.371432 4.0194 0.453633 4 0.536977 4H4V0.5C4 0.223858 4.22386 0 4.5 0Z" fill="#EBEBEB"/>
        </svg>
      )
    }

    return(
        <FaqHeading className={active ? "opened" : "closed"} onClick={setup}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>{question}<Aicon /></div>
            <FaqAnswer className={active ? "opened" : "closed"}>{answer}</FaqAnswer>
        </FaqHeading>
    )
}

export  default FaqItem;