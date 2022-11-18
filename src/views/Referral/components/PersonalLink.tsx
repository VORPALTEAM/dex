import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { ShareReferralIcon, 
         CopyClipboardIcon } from 'vorpaltesttoolkit'

const PersonalLink = ({ linkId }) => {

  const referralLink = `https://vorpal.finance/?ref=${linkId}`
  const imagineReferralLink = `${referralLink.substring(0, 48)}...`


  const LinkBlock  = styled.div`
    display: flex;
    padding: 10px 0 0;
  `

  const ShareBlock = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #FFF;
    border-radius: 5px;
  `
  const RefInput = styled.input`
     width: calc(100% - 50px);
     min-width: 300px;
     background: transparent;
     border: 1px solid #FFF;
     border-radius: 5px;
     color: #F1F6F9;
     font-size: 16px;
     padding: 10px;
     margin-right: 10px;
  `
  const CopyIcon = styled(CopyClipboardIcon)`
     position: absolute;
     right: 38px;
  `

  return (
    <LinkBlock>
       <RefInput type="text" title={referralLink} value={imagineReferralLink} />
       <CopyIcon width="29px" height="29px" />
       <ShareBlock>
          <ShareReferralIcon width="29px" height="29px" mt="6px" ml="4px" />
       </ShareBlock>
    </LinkBlock>
  )
}

export default PersonalLink
