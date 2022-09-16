import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BunnyPlaceholderIcon, Flex, Box, Heading } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'

const PersonalLinkBlock = () => {
  const { t } = useTranslation()

  const ReferralBox = styled(Box)`
   width: 100%;
   min-height: 128px;
   border-radius: 20px;
   background: linear-gradient(90deg, #5C258D 0%, #4389A2 100%);
`

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" p="24px">
      <ReferralBox>
        <Heading as="h5" scale="md" color="textDisabled">
          {t('Ref links')}
        </Heading>
      </ReferralBox>
    </Flex>
  )
}

export default PersonalLinkBlock
