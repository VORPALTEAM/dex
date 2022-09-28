import React from 'react'
import { AutoRenewIcon, Flex, Box, Heading, Text, AskIcon, SearchIcon } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'

export const Board = styled(Box)`
  width: 100%;
  min-height: 300px;
  background: #352F44;
  border-radius: 20px;
`   
export const BoardHeading = styled(Flex)`
  width: 100%;
  min-height: 50px;
  margin: 60px 0 20px 0;
  justify-content: space-between;
`   

export const TitleContainer = styled(Box)`
width: 20%;
min-width: 260px;
min-height: 50px;
margin-left: 20px;
`   
export const SearchCtnr = styled.div`
  width: 300px;
  margin-top: 20px;
  display: flex;
`   

export const HeadingSection = ({ title, subTitle }) => {
  return(
    <BoardHeading>
        <TitleContainer>
          <Text color="invertedContrast" fontSize="32px" fontWeight="700">{title}</Text>
          <Text color="invertedContrast" fontSize="16px" fontWeight="300">{subTitle}</Text>
        </TitleContainer>
        <SearchCtnr>
          <SearchIcon color="dark" />
            <input style={{
                width: 300,
                height: 40,
                borderRadius: 30,
                background: '#FFFFFF'
            }} type="text" placeholder="biswap.org/?ref=4ded6d5..." />
        </SearchCtnr>
    </BoardHeading>
  )
}