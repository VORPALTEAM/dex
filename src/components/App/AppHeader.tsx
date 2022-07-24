import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Heading, IconButton, ArrowBackIcon, NotificationDot } from 'vorpaltesttoolkit'
import { Link } from 'react-router-dom'
import { useExpertModeManager } from 'state/user/hooks'
import GlobalSettings from 'components/Menu/GlobalSettings'
// import Transactions from './Transactions'
import QuestionHelper from '../QuestionHelper'

interface Props {
  title: string
  subtitle: string
  helper?: string
  backTo?: string
  noConfig?: boolean
}

const AppHeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  width: 580px;
  margin: 50px auto 20px auto;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`

const CustomHeading = styled(Heading)`
  font-family: 'RoundsBlack';
  font-size: '24px';
`

const AppHeader: React.FC<Props> = ({ title, subtitle, helper, backTo, noConfig = false }) => {
  const [expertMode] = useExpertModeManager()

  return (
    <AppHeaderContainer>
      <Flex alignItems="center" mr={noConfig ? 0 : '16px'}>
        {backTo && (
          <IconButton as={Link} to={backTo}>
            <ArrowBackIcon width="32px" />
          </IconButton>
        )}
        <Flex flexDirection="column">
          <CustomHeading as="h2" mb="8px">
            {title}
          </CustomHeading>
          <Flex alignItems="self-end">
            <Text fontSize="12px">{subtitle}</Text>
            {helper && <QuestionHelper size="20px" color="text" text={helper} mr="4px" placement="top-start" />}
          </Flex>
        </Flex>
      </Flex>
      {!noConfig && (
        <Flex alignItems="center">
          <NotificationDot show={expertMode}>
            <GlobalSettings color="text" />
          </NotificationDot>
          {/* <Transactions color="text" /> */}
        </Flex>
      )}
    </AppHeaderContainer>
  )
}

export default AppHeader
