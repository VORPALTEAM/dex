import { Button, Flex, Text } from 'vorpaltesttoolkit'
import BigNumber from 'bignumber.js'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import React, { useCallback, useState } from 'react'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { DeserializedFarm } from 'state/types'
import styled from 'styled-components'
import { getAddress } from 'utils/addressHelpers'
import { logError } from 'utils/sentry'
import StyledConnectWalletButton from '../../../../style/ConnectWalletButton'
import useApproveFarm from '../../hooks/useApproveFarm'
import HarvestAction from './HarvestAction'
import StakeAction from './StakeAction'

const Action = styled.div`
  border-top: ${({ theme }) => `1px solid ${theme.colors.text}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.text}`};
  padding: 8px 0px;
  margin: 10px 0px 7px 0px;
`
export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  account?: string
  addLiquidityUrl?: string
  cakePrice?: BigNumber
  lpLabel?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl, cakePrice, lpLabel }) => {
  const { t } = useTranslation()
  const { toastError } = useToast()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = farm
  const { allowance, tokenBalance, stakedBalance, earnings } = farm.userData || {}
  const lpAddress = getAddress(lpAddresses)
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const dispatch = useAppDispatch()

  const lpContract = useERC20(lpAddress)

  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
    } catch (e) {
      logError(e)
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
    } finally {
      setRequestedApproval(false)
    }
  }, [onApprove, dispatch, account, pid, t, toastError])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={farm.lpSymbol}
        pid={pid}
        apr={farm.apr}
        lpLabel={lpLabel}
        cakePrice={cakePrice}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <Button
        style={{ boxShadow: 'none' }}
        mt="8px"
        width="100%"
        height="40px"
        variant="farmsButton"
        disabled={requestedApproval}
        onClick={handleApprove}
      >
        {t('Enable Contract')}
      </Button>
    )
  }

  return (
    <Action>
      <Flex>
        <Text bold fontFamily="RobotoBold" textTransform="uppercase" color="purple" fontSize="12px" pr="4px">
          Pickle
        </Text>
        <Text bold fontFamily="RobotoBold" textTransform="uppercase" color="text" fontSize="12px">
          {t('Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} />
      <Flex>
        <Text bold fontFamily="RobotoBold" textTransform="uppercase" color="purple" fontSize="12px" pr="4px">
          {farm.lpSymbol}
        </Text>
        <Text bold fontFamily="RobotoBold" textTransform="uppercase" color="text" fontSize="12px">
          {t('Staked')}
        </Text>
      </Flex>
      {!account ? <StyledConnectWalletButton mt="8px" style={{ width: '100%' }} /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
