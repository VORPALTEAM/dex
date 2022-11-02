import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'

const PromoPage = () => {

    const Promo = styled(Page)`
       margin: 0 auto;
       width: calc(100% - 64px);
       max-width: 1600px;
       min-height: 600px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    ` 
    
    return (
      <Promo>
        <h1 style={{
          fontSize: 64,
          color: "#FF0000"
        }}>Connect wallet to proceed</h1>
      </Promo>
    )
  }
  
  export default PromoPage