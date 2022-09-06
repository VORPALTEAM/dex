import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, Button, Link } from 'vorpaltesttoolkit'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import BorderedHeading from 'components/HeadingBorder'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  const SalesHeading = (headingText.length === 36) ? styled(Heading)`
  font-size: 60px;
  margin-bottom: 24px;

  word-wrap: break-word;
  width: 635px;
` : styled(Heading)`
   font-size: 60px;
   margin-bottom: 24px;
`

  const SubBorderedHeading  = styled(BorderedHeading)`
  width: 92%;
`

const SalesText = (bodyText.length === 108) ? styled(Text)`
word-wrap: break-word;
width: 630px;
`: Text

  const SalesHeadingFlex = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 1000px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 1400px;
  }
`


  return (
    <Flex flexDirection="column">
      <SalesHeadingFlex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          ml={[null, null, '-24px', !reverse ? '-48px' : '48px']}
        >
          <CompositeImage {...images} />
        </Flex>
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse ? '-96px' : '0px']}
          mr={[null, null, null, !reverse ? '20px' : '72px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <SalesHeading scale="xl" color="primary" fontSize="60px">{headingTranslatedText}</SalesHeading>
            <SubBorderedHeading />
             <SalesText color="textSubtle" mb="24px" fontSize="21px">
               {bodyTranslatedText}
             </SalesText>
            <SubBorderedHeading />
          <Flex
           alignSelf={[null, null, null, !reverse ? 'flex-end' : 'flex-start']}
           paddingRight="34px">
            <Button mr="24px">
              {primaryButton.external ? (
                <Link color="tertiary" external href={primaryButton.to}>
                  <Text color="card" bold fontSize="18px">
                    {t(primaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="18px">
                    {t(primaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
            <Button mr="24px">
              {secondaryButton.external ? (
                <Link color="tertiary" external href={secondaryButton.to}>
                  <Text color="card" bold fontSize="18px">
                    {t(secondaryButton.text)}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={secondaryButton.to}>
                  <Text color="card" bold fontSize="18px">
                    {t(secondaryButton.text)}
                  </Text>
                </RouterLink>
              )}
            </Button>
          </Flex>
        </Flex>
      </SalesHeadingFlex>
    </Flex>
  )
}

export default SalesSection
