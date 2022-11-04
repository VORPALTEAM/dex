import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { Heading, Text, SubtractIcon } from 'vorpaltesttoolkit'

interface Data {
    item: {
        id: number,
        icon: string,
        heading: string,
        description: string,
        expHeading: string,
        expDescription: string,
        expLink: string,
        expLinkText: string,
        textIcon: boolean
    }
  }

const PromoItem = ({ item } : Data) => {

    const PromoStep = styled.div`
       width: 90%;
       max-width: 440px;
       height: 453px;
       display: flex;
       flex-direction: column;
       align-items: center;
       background: #1A192E;
       border-radius: 29px;
       padding: 14px 21px;
    `
    const StepSection = styled.div`
       width: 100%;
    `
    const StepNumber = styled.div`
       width: 46px;
       height: 46px;
       border: 1px solid #FFFFFF;
       border-radius: 98px;
    `

    const PromoStepFooter = styled.div`
       display: flex;
       width: 100%;
       max-width: 440px;
       flex-direction: column;
       align-items: left;
       padding: 42px 21px;
    `
    return(
        <div> 
          <PromoStep>
            <StepSection>
              <StepNumber>
                <Text ml="12px" mt="-2px" fontSize="32px" color="#FFFFFF" fontWeight="700">{item.id}</Text>
              </StepNumber>
            </StepSection>
            <img style={{
                marginTop: -20
            }} src={item.icon} width="90%" alt={ item.heading } />
            <Text fontSize="16px" textAlign="center" color="#F1F6F9" fontWeight="400">{item.heading}</Text>
            <Text fontSize="16px" textAlign="center" color="#979797" fontWeight="400">{item.description}</Text>
          </PromoStep>
          <PromoStepFooter>
            <Text fontSize="24px" textAlign="left" color="#FFFFFF" >{item.expHeading}</Text>
            <Text mt="10px" fontSize="16px" textAlign="left" color="#FFFFFF" >{item.expDescription}</Text>
            <a href={item.expLink} style={{
                display: "flex"
            }}>
              <Text mt="10px" fontSize="20px" fontWeight="600" textAlign="left" color="primary" >{item.expLinkText}</Text>
              <SubtractIcon ml="9px" mt="4px" />
            </a>
          </PromoStepFooter>
        </div>
    )
}

export default PromoItem