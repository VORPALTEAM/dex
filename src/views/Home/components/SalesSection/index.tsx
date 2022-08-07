import React from 'react'
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

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeImage {...images} />
        </Flex>
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <Heading scale="xl" color="primary">{headingTranslatedText}</Heading>
          <BorderedHeading />
          <Text color="textSubtle" mb="24px">
            {bodyTranslatedText}
          </Text>
          <BorderedHeading />
          <Flex>
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
      </Flex>
    </Flex>
  )
}

export default SalesSection
