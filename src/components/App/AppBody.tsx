import React from 'react'
import styled from 'styled-components'
import { Card } from 'pickleswap-uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 40px;
  width: ${({ width }) => `${width}px` ?? '100%'};
  z-index: 1;
  background: transparent;
  padding: 0;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, width }: { children: React.ReactNode; width?: number }) {
  return <BodyWrapper width={width}>{children}</BodyWrapper>
}
