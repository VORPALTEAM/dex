import { Token, ChainId } from 'pickleswap-sdk2'
// import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = []

export default ifos
