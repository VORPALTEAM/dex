// import tokens from './tokens'
import { SerializedFarmConfig } from './types'
// import serializedTokens from './tokens'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  // {
  //   pid: 1,
  //   lpSymbol: 'RTT-SWT',
  //   lpAddresses: {
  //     97: '0x0C55d02a31271A0F365D5d544E1eD27d6B8d21cf',
  //     56: '0x0C55d02a31271A0F365D5d544E1eD27d6B8d21cf',
  //   },
  //   token: serializedTokens.rtt,
  //   quoteToken: serializedTokens.swt,
  // },
]

export default priceHelperLps
