import styled from 'styled-components'
import ConnectWalletButton from '../components/ConnectWalletButton'

const StyledConnectWalletButton = styled(ConnectWalletButton)`
  width: 260px;
  height: 40px;
  background: #DBD8E3;
  color: ${({ theme }) => theme.colors.contrast};
  border-radius: 6px;
  margin: auto;
`

export default StyledConnectWalletButton
