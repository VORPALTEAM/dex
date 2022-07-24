import React from 'react'
import styled from 'styled-components'
import { CustomArrowDown, Text } from 'vorpaltesttoolkit'
import { useTranslation } from 'contexts/Localization'

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 0px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({ onClick, expanded }) => {
  const { t } = useTranslation()

  return (
    <Wrapper aria-label={t('Hide or show expandable content')} role="button" onClick={() => onClick()}>
      <Text fontSize="12px" textTransform="uppercase" color="text" bold>
        {expanded ? t('Hide') : t('Details')}
      </Text>
      {expanded ? (
        <CustomArrowDown width="9px" style={{ transform: 'rotateZ(180deg)' }} />
      ) : (
        <CustomArrowDown width="9px" />
      )}
    </Wrapper>
  )
}

ExpandableSectionButton.defaultProps = {
  expanded: false,
}

export default ExpandableSectionButton
