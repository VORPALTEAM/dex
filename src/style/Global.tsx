import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'vorpaltesttoolkit/dist/theme'
import RobotoBlack from '../fonts/Roboto-Black.ttf'
import RobotoBlackItalic from '../fonts/Roboto-BlackItalic.ttf'
import RobotoBold from '../fonts/Roboto-Bold.ttf'
import RobotoItalic from '../fonts/Roboto-Italic.ttf'
import RobotoLight from '../fonts/Roboto-Light.ttf'
import RobotoLightItalic from '../fonts/Roboto-LightItalic.ttf'
import RobotoMedium from '../fonts/Roboto-Medium.ttf'
import RobotoMediumItalic from '../fonts/Roboto-MediumItalic.ttf'
import RobotoRegular from '../fonts/Roboto-Regular.ttf'
import RobotoThin from '../fonts/Roboto-Thin.ttf'
import RobotoThinItalic from '../fonts/Roboto-ThinItalic.ttf'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "RobotoBlack";
    src: url(${RobotoBlack}) format("truetype");
    }

    @font-face {
    font-family: "RobotoBold";
    src: url(${RobotoBold}) format("truetype");
    font-weight: bold;
    }

    @font-face {
    font-family: "RobotoItalic";
    src: url(${RobotoItalic}) format("truetype");
    font-style: italic;
    }

    @font-face {
    font-family: "RobotoBlackItalic";
    src: url(${RobotoBlackItalic}) format("truetype");
    font-style: italic;
    }

    @font-face {
    font-family: "Roboto";
    src: url(${RobotoLight}) format("truetype");
    }
    @font-face {
    font-family: "RobotoLightItalic";
    src: url(${RobotoLightItalic}) format("truetype");
    font-style: italic;
    }
    @font-face {
    font-family: "RobotoMedium";
    src: url(${RobotoMedium}) format("truetype");
    }

    @font-face {
    font-family: "RobotoMediumItalic";
    src: url(${RobotoMediumItalic}) format("truetype");
    font-style: italic;
    }

    @font-face {
    font-family: "RobotoRegular";
    src: url(${RobotoRegular}) format("truetype");
    }

    @font-face {
    font-family: "RobotoThin";
    src: url(${RobotoThin}) format("truetype");
    }

    @font-face {
    font-family: "RobotoThinItalic";
    src: url(${RobotoThinItalic}) format("truetype");
    font-style: italic;
    }

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
