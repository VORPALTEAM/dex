import React from 'react'
import styled from 'styled-components'

const EnvImg = styled.img`
position: absolute;
z-index: -4;
display: none;

${({ theme }) => theme.mediaQueries.md} {
  display: block;
}
`

export default EnvImg;