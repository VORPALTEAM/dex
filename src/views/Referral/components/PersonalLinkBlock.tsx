import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BunnyPlaceholderIcon, Flex, Box, Heading, Text, PlusIcon } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'

const PersonalLinkBlock = () => {
  const { t } = useTranslation()

  const referralLink = 'biswap.org/?ref=4ded6d55a4455f89c0fb...'

  const ReferralBox = styled(Box)`
   width: 100%;
   min-height: 128px;
   border-radius: 20px;
   background: linear-gradient(90deg, #5C258D 0%, #4389A2 100%);
`
  const RefContent = styled(Box)`
  padding: 20px;
`
  const HeadingRow = styled(Box)`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  min-width: 560px;
`
  const RefHeading = styled(Heading)`
   font-family: Roboto;
   font-style: Medium;
   font-size: 32px;
  `
  const RefAddLink = styled(Text)`
    font-family: Roboto;
    font-style: Bold;
    font-size: 16px;
  `

  const LinkBlock  = styled.div`
    display: flex;
    padding: 10px 0;
  `

  const ShareBlock = styled.div`
    border: 1px solid #FFF;
    border-radius: 4px;
`

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" p="24px">
      <ReferralBox> 
        <RefContent>
          <HeadingRow>
            <RefHeading as="h5" scale="md" color="invertedContrast">
            {t('My Referral Link')}
            </RefHeading>
            <RefAddLink>
               Create new link <PlusIcon />
            </RefAddLink>
          </HeadingRow>
          <LinkBlock>
            <input style={{
              width: '70%',
              minWidth: 300
            }} type="text" value={referralLink} />
            <ShareBlock />
          </LinkBlock>
        </RefContent>
      </ReferralBox>
    </Flex>
  )
}

export default PersonalLinkBlock
