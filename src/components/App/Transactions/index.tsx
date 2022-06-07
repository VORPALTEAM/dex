import React from 'react'
import { HistoryIcon, Button, useModal } from 'pickleswap-uikit'
import TransactionsModal from './TransactionsModal'

interface Props {
  color: string
}

const Transactions: React.FC<Props> = (props) => {
  const { color } = props
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  return (
    <>
      <Button variant="text" p={0} onClick={onPresentTransactionsModal} ml="16px">
        <HistoryIcon color={color ?? 'textSubtle'} width="24px" />
      </Button>
    </>
  )
}

export default Transactions
