import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Text } from 'pickleswap-uikit'
import CustomSelect, { OptionProps } from 'components/CustomSelect/CustomSelect'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: 15px;
  width: 280px;
  height: 30px;

  > ${Text} {
    font-size: 12px;
  }
`

const TextContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 114px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 13px 5px 5px 13px;

  &:after {
    content: '';
    position: absolute;
    right: -3.5px;
    top: 2px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: ${({ theme }) => `13px solid${theme.colors.primary}`};
    border-bottom: 13px solid transparent;
    transform: rotateZ(180deg);
  }
`

const StyledSelect = styled(CustomSelect)`
  background-color: transparent;
`

const CustomSelectContainer = ({
  handleSortOptionChange,
  title,
}: {
  handleSortOptionChange: (option: OptionProps) => void
  title: string
}) => {
  const { t } = useTranslation()

  return (
    <LabelWrapper>
      <TextContainer>
        <Text textTransform="uppercase">{title}</Text>
      </TextContainer>
      <StyledSelect
        options={[
          {
            label: t('Hot'),
            value: 'hot',
          },
          {
            label: t('APR'),
            value: 'apr',
          },
          {
            label: t('Multiplier'),
            value: 'multiplier',
          },
          {
            label: t('Earned'),
            value: 'earned',
          },
          {
            label: t('Liquidity'),
            value: 'liquidity',
          },
        ]}
        onOptionChange={handleSortOptionChange}
      />
    </LabelWrapper>
  )
}

export default CustomSelectContainer
