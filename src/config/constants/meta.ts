import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'VorpalDao',
  description:
    'VORPAL DEX makes it easy to make your crypto and NFT work for you.',
  image: '/images/home/lunar-galaxy/bunny.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('VorpalDao')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('VorpalDao')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('VorpalDao')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('VorpalDao')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('VorpalDao')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('VorpalDao')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('VorpalDao')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('VorpalDao')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('VorpalDao')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('VorpalDao')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('VorpalDao')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('VorpalDao')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('VorpalDao')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('VorpalDao')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('VorpalDao')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('VorpalDao')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('VorpalDao')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('VorpalDao')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('VorpalDao Info & Analytics')}`,
        description: 'View statistics for VorpalDao exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('VorpalDao Info & Analytics')}`,
        description: 'View statistics for VorpalDao exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('VorpalDao Info & Analytics')}`,
        description: 'View statistics for VorpalDao exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('VorpalDao')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('VorpalDao')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('VorpalDao')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('VorpalDao')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('VorpalDao')}`,
      }
    default:
      return null
  }
}
