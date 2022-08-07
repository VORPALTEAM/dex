import React from 'react'
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

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '64px']}
    >
      <Heading scale="xl">{headingText}</Heading>
      <Heading color={highlightColor} scale="xl" mb="24px">
        {headingSecondText}
      </Heading>
      <Text textAlign="center" color="tertiary" fontWeight="500">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
