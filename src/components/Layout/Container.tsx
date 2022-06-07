import React from 'react'
import { Box, BoxProps } from 'pickleswap-uikit'

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box px={['16px', '24px']} paddingBottom={0} mx="auto" maxWidth="1200px" {...props}>
    {children}
  </Box>
)

export default Container
