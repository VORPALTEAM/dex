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
  html, body { 
    position: relative;
    max-width: 100%; 
    overflow-x: hidden; 
  }
  
  body {
    background: repeat url(/images/home/background/wallpaper.png);
    background-attachment: fixed;
    background-size: 120%;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
