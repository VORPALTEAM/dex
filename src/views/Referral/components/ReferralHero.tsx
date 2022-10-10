import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Card, Box, Flex, Heading, Text, SubtractIcon } from 'vorpaltesttoolkit'
import BorderedHeading from 'components/HeadingBorder'
import { useTranslation } from 'contexts/Localization'
import PersonalLinkBlock from './PersonalLinkBlock'

const ReferralHero = () => {
  const { t } = useTranslation()

  const descriptionUrl = "/"
  const Description = styled(Text)`
    color: #FFFFFF;
    font-size: 21px;

     .yellow {
        color: #F8D300;
        font-weight: 400;
      }
  `

  const LinkText = styled.p`
     width: 103px;
  `

  return (
    <Flex position="relative"
    flexDirection={['column-reverse', null, null, 'row']}
    width="100%"
    justifyContent="space-between"
    id="referral-hero">
      <Flex
       width='35%'
       flexDirection='column'
       >
       <Heading as="h5" scale="xl" color="primary" width="533px" mb="21px">
        {t('Invite your friends. Earn cryptocurrency together')}
       </Heading>
       <BorderedHeading />
         <Description mb="21px" width="556px">Earn up to <b className="yellow">20%</b> from friends swap commission on Biswap and <b className="yellow">5%</b> from their earnings on Farms and Launch pools.</Description>
         <a href={descriptionUrl}><Text color="primary" mb="21px" fontFamily="Roboto" fontSize="21px" fontWeight="700" display="flex"><LinkText>Read more</LinkText><SubtractIcon ml="9px" mt="4px" /></Text></a>
       <BorderedHeading />
      </Flex>
      <Flex>
        <PersonalLinkBlock />
      </Flex>
    </Flex>
  )
}

export default ReferralHero
