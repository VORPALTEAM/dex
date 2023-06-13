/* eslint-disable no-console */
import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Image, Heading, RowType, Toggle, Text, Flex, SearchIcon, InputGroup } from 'vorpaltesttoolkit'
import { ChainId } from 'pickleswap-sdk'
import styled from 'styled-components'

const Ctnr = styled.div`
   min-height: 600px;
   display: flex;
   justify-content: center;
`

const Form = styled.div`
   width: 72%;
   margin: 100px;
   padding: 40px;
   border-radius: 20px;
   background: linear-gradient(180deg, #FFFFFF 0%, #B3B3B3 100%);
   display: flex;
   flex-direction: column;
   justify-content: center;

   input {
       width: 100%;
       margin-top: 40px;
       height: 32px;
   }
`


const Faucet = () => {

    return(
        <Ctnr>
            <Form>
                <h3>Plasma token faucet</h3>
                <h5>Amount : </h5>
                <input type="number" />
                <h5>Address to : </h5>
                <input type="text" />
                <button type="button">
                    Get plasma
                </button>
            </Form>   
        </Ctnr>
    )
}

export default Faucet