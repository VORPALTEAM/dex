import React from 'react'
import { AskIcon, useTooltip, Box, BoxProps, Placement } from 'vorpaltesttoolkit'
import styled from 'styled-components'

interface Props extends BoxProps {
  text: string | React.ReactNode
  placement?: Placement
  size?: string
}

const QuestionWrapper = styled.div`
  :hover,
  :focus {
    opacity: 0.7;
  }
`

const QuestionHelper: React.FC<Props> = ({
  text,
  placement = 'right-end',
  size = '16px',
  color = 'contarst',
  ...props
}) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(text, { placement, trigger: 'hover' })

  return (
    <Box {...props}>
      {tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef}>
        <AskIcon color={color} width={size} />
      </QuestionWrapper>
    </Box>
  )
}

export default QuestionHelper
