import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Toggle, Flex, Modal, InjectedModalProps, Heading } from 'pickleswap-uikit'
import {
  useAudioModeManager,
  useExpertModeManager,
  // useSubgraphHealthIndicatorManager,
  useUserExpertModeAcknowledgementShow,
  useUserSingleHopOnly,
} from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'
import { useSwapActionHandlers } from 'state/swap/hooks'
import useTheme from 'hooks/useTheme'
import QuestionHelper from '../../QuestionHelper'
import TransactionSettings from './TransactionSettings'
import ExpertModal from './ExpertModal'
import GasSettings from './GasSettings'

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const StyledModal = styled(Modal)`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.text}`};
  border-radius: 40px;

  ${Heading} {
    font-family: 'RoundsBlack';
  }
`

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgementShow()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()
  // const [subgraphHealth, setSubgraphHealh] = useSubgraphHealthIndicatorManager()
  const { onChangeRecipient } = useSwapActionHandlers()

  const { t } = useTranslation()
  const { theme } = useTheme()

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        onDismiss={onDismiss}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    )
  }

  const handleExpertModeToggle = () => {
    if (expertMode) {
      onChangeRecipient(null)
      toggleExpertMode()
    } else if (!showExpertModeAcknowledgement) {
      onChangeRecipient(null)
      toggleExpertMode()
    } else {
      setShowConfirmExpertModal(true)
    }
  }

  return (
    <StyledModal
      title={t('Settings')}
      headerBackground="colors.backgroundAlt"
      onDismiss={onDismiss}
      style={{ maxWidth: '448px' }}
    >
      <ScrollableContainer>
        <Flex pb="24px" flexDirection="column">
          <Text fontFamily="RobotoBold" fontSize="16px" color="text" mb="10px">
            {t('Global')}
          </Text>
          {/* <Flex justifyContent="space-between">
            <Text mb="24px">{t('Dark mode')}</Text>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </Flex> */}
          <GasSettings />
        </Flex>
        <Flex pt="24px" flexDirection="column" borderTop={`1px ${theme.colors.text} solid`}>
          <Text bold textTransform="uppercase" fontSize="16px" color="text" mb="24px">
            {t('Swaps & Liquidity')}
          </Text>
          <TransactionSettings />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="19px">
          <Flex alignItems="center">
            <Text>{t('Expert Mode')}</Text>
            <QuestionHelper
              text={t('Bypasses confirmation modals and allows high slippage trades. Use at your own risk.')}
              placement="top-start"
              ml="4px"
              color="text"
              size="20px"
            />
          </Flex>
          <Toggle
            id="toggle-expert-mode-button"
            scale="md"
            checked={expertMode}
            defaultColor="contrast"
            checkedColor="backgroundAlt1"
            onChange={handleExpertModeToggle}
          />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="19px">
          <Flex alignItems="center">
            <Text>{t('Disable Multihops')}</Text>
            <QuestionHelper
              text={t('Restricts swaps to direct pairs only.')}
              placement="top-start"
              ml="4px"
              size="20px"
            />
          </Flex>
          <Toggle
            id="toggle-disable-multihop-button"
            checked={singleHopOnly}
            scale="md"
            defaultColor="contrast"
            checkedColor="backgroundAlt1"
            onChange={() => {
              setSingleHopOnly(!singleHopOnly)
            }}
          />
        </Flex>
        {/* <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text>{t('Subgraph Health Indicator')}</Text>
            <QuestionHelper
              text={t(
                'Turn on NFT market subgraph health indicator all the time. Default is to show the indicator only when the network is delayed',
              )}
              placement="top-start"
              ml="4px"
            />
          </Flex>
          <Toggle
            id="toggle-subgraph-health-button"
            checked={subgraphHealth}
            scale="md"
            onChange={() => {
              setSubgraphHealh(!subgraphHealth)
            }}
          />
        </Flex> */}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Text>{t('Flippy sounds')}</Text>
            <QuestionHelper
              text={t('Fun sounds to make a truly immersive pancake-flipping trading experience')}
              placement="top-start"
              ml="4px"
              size="20px"
            />
          </Flex>
          <Toggle
            defaultColor="contrast"
            checkedColor="backgroundAlt1"
            checked={audioPlay}
            onChange={toggleSetAudioMode}
            scale="md"
          />
        </Flex>
      </ScrollableContainer>
    </StyledModal>
  )
}

export default SettingsModal
