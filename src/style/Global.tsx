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

    img {
      height: auto;
      max-width: 100%;
    }
  }

  @media screen and (min-width: 769px) {
    body {
      background: #000 repeat url(/images/home/background/wallpaper_hd.webp);
      background-attachment: fixed;
      background-size: 120%;
    }
  }

  /* @media screen and (min-width: 1336px) {
    body {
      background: repeat url(/images/home/background/wallpaper_sd.webp);
    }
  }

  @media screen and (min-width: 1920px) {
    body {
      background: repeat url(/images/home/background/wallpaper_hd.webp);
    }
  } */

  @media screen and (max-width: 768px) {
    body {
      background-color: #000;
      /* background: repeat url(/images/home/background/mobileWall.png); */
      background-attachment: fixed;
      background-size: 100%;
    }
  }
`

export default GlobalStyle
