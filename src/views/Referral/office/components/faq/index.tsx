import React from 'react'
import { AutoRenewIcon, Flex, Heading } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import orderBy from 'lodash/orderBy'
import {Questions} from './data'
import FaqItem from './FaqItem'

// console.log(document.location)

const FaqSection = () => {

  const FaqContainer = styled(Flex)`
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  `

  return (
    <FaqContainer>
      {Questions.map((question, index) => {
        return(
          <FaqItem question={question.question} answer={question.answer} />
        )
      })}
    </FaqContainer>  
  )
}

export default FaqSection