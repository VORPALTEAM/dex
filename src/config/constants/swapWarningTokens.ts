import { Token } from 'pickleswap-sdk2'
// import tokens from 'config/constants/tokens'

// const { bondly, safemoon } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{}

export default SwapWarningTokens
