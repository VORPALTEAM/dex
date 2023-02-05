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

  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: 36px;
    text-align: center;
  }
` : styled(Heading)`
   font-size: 60px;
   margin-bottom: 24px;

   ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: 36px;
    text-align: center;
  }
`

  const SubBorderedHeading  = styled(BorderedHeading)`
  width: 92%;
`

  const SalesText = (bodyText.length === 108) ? styled(Text)`
     word-wrap: break-word;
     width: 630px;

     ${({ theme }) => theme.mediaQueries.mobile} {
      font-size: 12px;
      text-align: center;
     }
  `: styled(Text)`

    ${({ theme }) => theme.mediaQueries.mobile} {
      font-size: 12px;
      text-align: center;
    }
  `

  const SalesHeadingFlex = styled(Flex)`
   ${({ theme }) => theme.mediaQueries.md} {
     min-width: 1000px;
   }

    ${({ theme }) => theme.mediaQueries.lg} {
      min-width: 1400px;
    }

    ${({ theme }) => theme.mediaQueries.mobile} {
      width: 100%;
    }
  `

  const ImageFlex =  styled(Flex)`

   ${({ theme }) => theme.mediaQueries.mobile} {
     position: absolute;
     margin-top: -100px;
   }
  `

  const HeadingFlex =  styled(Flex)`

   ${({ theme }) => theme.mediaQueries.mobile} {
     width: 100%;
   }
  `

  const ButtonFlex =  styled(Flex)`

    padding-right: 34px;

   ${({ theme }) => theme.mediaQueries.mobile} {
    padding-right: 0px;
   }
  `
 

  return (
    <Flex flexDirection="column" mt="40px" mb="60px">
      <SalesHeadingFlex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <ImageFlex
          height={['100%', null, null, '100%']}
          width={['100%', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          ml={[null, null, '-24px', !reverse ? '-48px' : '48px']}
        >
          <CompositeImage {...images} />
        </ImageFlex>
        <HeadingFlex
          flexDirection="column"
          flex="1"
          mt={["300px", null, null, null]}
          ml={[null, null, null, reverse ? '-96px' : '0px']}
          mr={[null, null, null, !reverse ? '20px' : '72px']}
          alignSelf={['center', null, null, 'center']}
        >
          <SalesHeading scale="xl" color="primary" fontSize="60px">{headingTranslatedText}</SalesHeading>
            <SubBorderedHeading />
             <SalesText color="textSubtle" mb="24px" fontSize="21px">
               {bodyTranslatedText}
             </SalesText>
            <SubBorderedHeading />
          <ButtonFlex
           alignSelf={[null, null, null, !reverse ? 'flex-end' : 'flex-start']}>
            <Button mr="24px">
              {primaryButton.external ? (
                <Link color="tertiary" external href={primaryButton.to}>
                  <SalesText color="card" bold fontSize="18px">
                    {t(primaryButton.text)}
                  </SalesText>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <SalesText color="card" bold fontSize="18px">
                    {t(primaryButton.text)}
                  </SalesText>
                </RouterLink>
              )}
            </Button>
            <Button mr="24px">
              {secondaryButton.external ? (
                <Link color="tertiary" external href={secondaryButton.to}>
                  <SalesText color="card" bold fontSize="18px">
                    {t(secondaryButton.text)}
                  </SalesText>
                </Link>
              ) : (
                <RouterLink to={secondaryButton.to}>
                  <SalesText color="card" bold fontSize="18px">
                    {t(secondaryButton.text)}
                  </SalesText>
                </RouterLink>
              )}
            </Button>
          </ButtonFlex>
        </HeadingFlex>
      </SalesHeadingFlex>
    </Flex>
  )
}

export default SalesSection
