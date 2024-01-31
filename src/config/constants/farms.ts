import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x8bce255da73839a550d1df6651503e6dd38c320d',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'RTT-SWT',
    lpAddresses: {
      97: '0x6f8d31aacd635501efcbe096b49efe4a04423cec',
      56: '0x6f8d31aacd635501efcbe096b49efe4a04423cec',
    },
    token: serializedTokens.rtt,
    quoteToken: serializedTokens.swt,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'RTT-SWT',
  //   lpAddresses: {
  //     97: '0x6f8d31aacd635501efcbe096b49efe4a04423cec',
  //     56: '0x6f8d31aacd635501efcbe096b49efe4a04423cec',
  //   },
  //   token: serializedTokens.rtt,
  //   quoteToken: serializedTokens.swt,
  // },
  // {
  //   pid: 1,
  //   lpSymbol: ' LP',
  //   lpAddresses: {
  //     97: '0x0C55d02a31271A0F365D5d544E1eD27d6B8d21cf',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 252,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 1,
  //   lpSymbol: 'RTT-SWT',
  //   lpAddresses: {
  //     97: '0x0C55d02a31271A0F365D5d544E1eD27d6B8d21cf',
  //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  //   },
  //   token: serializedTokens.rtt,
  //   quoteToken: serializedTokens.swt,
  // },
  // {
  //   pid: 251,
  //   lpSymbol: 'RTT-SWT',
  //   lpAddresses: {
  //     97: '0x0C55d02a31271A0F365D5d544E1eD27d6B8d21cf',
  //     56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  //   },
  //   token: serializedTokens.rtt,
  //   quoteToken: serializedTokens.swt,
  // },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
]

export default farms
