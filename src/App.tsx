import React, { lazy, useEffect } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'vorpaltesttoolkit'
// import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import useUserAgent from 'hooks/useUserAgent'
import useScrollOnRouteChange from 'hooks/useScrollOnRouteChange'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
// import { useFetchProfile } from 'state/profile/hooks'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
import SubgraphHealthIndicator from 'components/SubgraphHealthIndicator'
import GlobalStyle from './style/Global'
import useActiveWeb3React from './hooks/useActiveWeb3React'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import EasterEgg from './components/EasterEgg'
// import GlobalCheckClaimStatus from './components/GlobalCheckClaimStatus'
import history from './routerHistory'
// Views included in the main bundle
import Pools from './views/Pools'
import Swap from './views/Swap'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from './views/AddLiquidity/redirects'
import RedirectOldRemoveLiquidityPathStructure from './views/RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly, RedirectToSwap } from './views/Swap/redirects'
import { useInactiveListener } from './hooks/useInactiveListener'
import useSentryUser from './hooks/useSentryUser'
import { RegisterReferral } from './views/Referral/hooks/dev'
// import useNftClaimStatusCheck from './hooks/useNftClaimStatusCheck'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
// const FarmAuction = lazy(() => import('./views/FarmAuction'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Referral = lazy(() => import('./views/Referral'))
const Funding = lazy(() => import('./views/Funding'))
// const Team = lazy(() => import('./views/Teams/Team'))
// const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
// const Predictions = lazy(() => import('./views/Predictions'))
// const PredictionsLeaderboard = lazy(() => import('./views/Predictions/Leaderboard'))
// const Voting = lazy(() => import('./views/Voting'))
// const Proposal = lazy(() => import('./views/Voting/Proposal'))
// const CreateProposal = lazy(() => import('./views/Voting/CreateProposal'))
const AddLiquidity = lazy(() => import('./views/AddLiquidity'))
const Liquidity = lazy(() => import('./views/Pool'))
const PoolFinder = lazy(() => import('./views/PoolFinder'))
const RemoveLiquidity = lazy(() => import('./views/RemoveLiquidity'))
const Info = lazy(() => import('./views/Info'))
// const NftMarket = lazy(() => import('./views/Nft/market'))
// const ProfileCreation = lazy(() => import('./views/ProfileCreation'))
// const PancakeSquad = lazy(() => import('./views/PancakeSquad'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account } = useActiveWeb3React()

  usePollBlockNumber()
  useEagerConnect()
  // useFetchProfile()
  usePollCoreFarmData()
  useScrollOnRouteChange()
  useUserAgent()
  useInactiveListener()
  useSentryUser()
  // useNftClaimStatusCheck()
  

    const queryString = window.location.search;
    // const { account } = useActiveWeb3React()
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    const ref = urlParams.get('ref')
    if (ref && account) {
      RegisterReferral (account, ref).then(() => {
        console.log("Registered")
      })
    }


  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      {/* <GlobalCheckClaimStatus excludeLocations={[]} /> */}
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route exact path="/farms/auction">
              <FarmAuction />
            </Route> */}
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>
            {/* <Route path="/lottery">
              <Lottery />
            </Route> */}
            {/* <Route path="/ifo">
              <Ifos />
            </Route> */}
            <Route exact path="/referral">
              <Referral />
            </Route>
            <Route exact path="/funding">
              <Funding />
            </Route>
            {/* <Route path="/teams/:id">
              <Team />
            </Route> */}
            {/* <Route path="/create-profile">
              <ProfileCreation />
            </Route> */}
            {/* <Route path="/competition">
              <TradingCompetition />
            </Route> */}
            {/* <Route exact path="/prediction">
              <Predictions />
            </Route>
            <Route path="/prediction/leaderboard">
              <PredictionsLeaderboard />
            </Route> */}
            {/* <Route exact path="/voting">
              <Voting />
            </Route>
            <Route exact path="/voting/proposal/create">
              <CreateProposal />
            </Route>
            <Route path="/voting/proposal/:id">
              <Proposal />
            </Route> */}

            {/* NFT */}
            {/* <Route path="/nfts">
              <NftMarket />
            </Route> */}

            {/* <Route path="/pancake-squad">
              <PancakeSquad />
            </Route>

            {/* Info pages */}
            <Route path="/info">
              <Info />
            </Route>

            {/* Using this format because these components use routes injected props. We need to rework them with hooks */}
            <Route exact strict path="/swap" component={Swap} />
            <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
            <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
            <Route exact strict path="/find" component={PoolFinder} />
            <Route exact strict path="/liquidity" component={Liquidity} />
            <Route exact strict path="/create" component={RedirectToAddLiquidity} />
            <Route exact path="/add" component={AddLiquidity} />
            <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
            <Route exact path="/create" component={AddLiquidity} />
            <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
            <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
            <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
            <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />

            {/* Redirect */}
            <Route path="/pool">
              <Redirect to="/liquidity" />
            </Route>
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            {/* <Route path="/collectibles">
              <Redirect to="/nfts" />
            </Route> */}
            {/* <Route path="/profile">
              <Redirect to={`${nftsBaseUrl}/profile/${account?.toLowerCase() || ''}`} />
            </Route> */}

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
      <SubgraphHealthIndicator />
    </Router>
  )
}

export default React.memo(App)
