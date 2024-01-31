import React from 'react'
import styled from 'styled-components'
import {
  // ChartIcon,
  Flex,
  Heading,
  // HistoryIcon,
  // IconButton,
  // NotificationDot,
  Text,
  // ChartDisableIcon,
} from 'vorpaltesttoolkit'
// import TransactionsModal from 'components/App/Transactions/TransactionsModal'
// import GlobalSettings from 'components/Menu/GlobalSettings'
// import { useExpertModeManager } from 'state/user/hooks'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
}

const CurrencyInputContainer = styled(Flex)`
  align-items: center;
  padding: 0px 0px 0px 0px;
  width: 554px;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const StyledSubTitle = styled(Flex)`
  width: 100%;
  padding: 9px 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`

// const ColoredIconButton = styled(IconButton)`
//   color: ${({ theme }) => theme.colors.textSubtle};
// `

const CurrencyInputHeader: React.FC<Props> = ({ title, subtitle }) => {
  // const [expertMode] = useExpertModeManager()
  // const toggleChartDisplayed = () => {
  //   setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  // }
  // const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer>
      <Flex width="100%" alignItems="flex-start" justifyContent="center">
        {/* {setIsChartDisplayed && (
          <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
            {isChartDisplayed ? <ChartDisableIcon color="textSubtle" /> : <ChartIcon width="24px" color="textSubtle" />}
          </ColoredIconButton>
        )} */}
        <Flex style={{ paddingTop: 40 }} width="475px" flexDirection="column" alignItems="center">
          <Heading as="h2" mb="8px" scale="sm" fontFamily="RoundsBlack">
            {title}
          </Heading>
          <StyledSubTitle alignItems="center">
            <Text color="text" fontSize="12px" fontFamily="RobotoBold">
              {subtitle.toUpperCase()}
            </Text>
          </StyledSubTitle>
        </Flex>
        <Flex>
          {/* <NotificationDot show={expertMode}>
            <GlobalSettings color="textSubtle" mr="0" />
          </NotificationDot> */}
          {/* <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="textSubtle" width="24px" />
          </IconButton> */}
        </Flex>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
