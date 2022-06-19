import React from 'react'
import { HelpIcon, useTooltip, Box, BoxProps, Placement } from 'pickleswap-uikit'
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
        <HelpIcon color={color} width={size} />
      </QuestionWrapper>
    </Box>
  )
}

export default QuestionHelper
