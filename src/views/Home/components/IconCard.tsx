import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Box, CardProps } from 'vorpaltesttoolkit'

const StyledCard = styled(Card)<{ background: string; rotation?: string; position?: string; height?: number }>`
  height: fit-content;
  padding: 1px 1px 4px 1px;
  box-sizing: border-box;
  position: relative;
  width: 340px;
  height: ${({ height }) => (height ? `${height}px` : 'fit-content')};

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
    ${({ position }) => (position ?  'position: absolute; top:280px; left:180px;' : 'inherit;')}
  }
`
//     ${({ position }) => (position ? position : 'relative')}
const IconWrapper = styled(Box)<{ rotation?: string }>`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  position?: string
  width?: number
  height?: number
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<IconCardProps> = ({ icon, position, width, height, background, borderColor, rotation, children, ...props }) => {
  return (
    <StyledCard background={background} borderBackground={borderColor} position={position} height={height} rotation={rotation} {...props}>
      <CardBody>
        <IconWrapper rotation={rotation}>{icon}</IconWrapper>
        {children}
      </CardBody>
    </StyledCard>
  )
}

export default IconCard
