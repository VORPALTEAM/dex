import React from 'react'
import { Flex, IconButton, CustomCogIcon, useModal } from 'vorpaltesttoolkit'
import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
}

const GlobalSettings = ({ color, mr = '8px' }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      {/* <IconButton onClick={onPresentSettingsModal} variant="text" scale="sm" mr={mr} id="open-settings-dialog-button">
        <CustomCogIcon height={30} width={30} color={color || 'contrast'} />
  </IconButton> */}
    </Flex>
  )
}

export default GlobalSettings
