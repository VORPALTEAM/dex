import React from 'react'
import { Flex, Button, Text } from 'pickleswap-uikit'
import QuestionHelper from 'components/QuestionHelper'
import { useTranslation } from 'contexts/Localization'
import { GAS_PRICE_GWEI, GAS_PRICE } from 'state/user/hooks/helpers'
import { useGasPriceManager } from 'state/user/hooks'
// import styled from 'styled-components'

// const StyledButton = styled(Button)`
//   color: 'black';
//   background-color: 'transparent';
//   border: ${({ theme }) => `1px solid ${theme.colors.back}`};
//   box-shadow: 'none';
// `

const GasSettings = () => {
  const { t } = useTranslation()
  const [gasPrice, setGasPrice] = useGasPriceManager()

  const disableButtonStyles = {
    color: 'black',
    backgroundColor: 'transparent',
    border: '1px solid #352F44',
    boxShadow: 'none',
    borderRadius: '15px',
    width: '116px',
    height: '30px',
    fontSize: '14px',
  }
  const activeButtonStyles = {
    color: '#F1F6F9',
    backgroundColor: '#352F44',
    border: '1px solid #352F44',
    boxShadow: 'none',
    borderRadius: '15px',
    width: '116px',
    height: '30px',
    fontSize: '14px',
  }

  return (
    <Flex flexDirection="column">
      <Flex mb="12px" alignItems="center">
        <Text>{t('Default Transaction Speed (GWEI)')}</Text>
        <QuestionHelper
          text={t(
            'Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees',
          )}
          placement="top-start"
          ml="4px"
          size="20px"
        />
      </Flex>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.default)
          }}
          style={gasPrice === GAS_PRICE_GWEI.default ? activeButtonStyles : disableButtonStyles}
        >
          {t('Standard (%gasPrice%)', { gasPrice: GAS_PRICE.default })}
        </Button>
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.fast)
          }}
          style={gasPrice === GAS_PRICE_GWEI.fast ? activeButtonStyles : disableButtonStyles}
        >
          {t('Fast (%gasPrice%)', { gasPrice: GAS_PRICE.fast })}
        </Button>
        <Button
          mr="4px"
          mt="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.instant)
          }}
          style={gasPrice === GAS_PRICE_GWEI.instant ? activeButtonStyles : disableButtonStyles}
        >
          {t('Instant (%gasPrice%)', { gasPrice: GAS_PRICE.instant })}
        </Button>
      </Flex>
    </Flex>
  )
}

export default GasSettings
