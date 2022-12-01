import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'vorpaltesttoolkit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Roboto';
  }
  body {
    background: no-repeat url(/images/home/background/wallpaper.png);
    background-attachment: fixed;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
