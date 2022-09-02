import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, useMatchBreakpoints } from 'vorpaltesttoolkit'

const StatCardContent: React.FC<{ headingText: string; headingSecondText: string, bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
  headingSecondText,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  const BottomText = styled(Text)`
    margin-top: 34px;
    text-align: center;
  `

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, '64px', '70px']}
    >
      <Heading scale="xl">{headingText}</Heading>
      <Heading color={highlightColor} scale="xl" mb="24px">
        {headingSecondText}
      </Heading>
      <BottomText textAlign="center" color="tertiary" fontWeight="700">{bodyText}</BottomText>
    </Flex>
  )
}

export default StatCardContent
