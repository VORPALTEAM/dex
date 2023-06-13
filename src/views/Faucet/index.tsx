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
   padding: 20px 40px;;
   border-radius: 20px;
   background: linear-gradient(180deg, #FFFFFF 0%, #B3B3B3 100%);
   display: flex;
   flex-direction: column;
   justify-content: center;

   h3 {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      font-size: 32px;
   }

   h5 {
      margin-top: 40px;
   }

   input {
       width: 100%;
       margin-top: 12px;
       height: 32px;
   }

   button {
      margin-top: 12px;
      width: 180px;
      height: 60px;
      border-radius: 8px;
      margin-left: calc(50% - 90px);
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      background: #2A2338;
      color: #E5E5E5;

      &:hover,
      &:focus {
        opacity: 0.7
      }

   }
`


const Faucet = () => {

    const [amount, enterAmount] = useState(0)
    const [address, enterAddress] = useState("")
    const addrSymbols = "0123456789abcdefABCDEF"

    const UpdateAmount = (event : any) => {
        if (!event.target) {
            return;
        }
        const val = event.target.value
        enterAmount(Number(val))
    }

    const UpdateAddress = (event : any) => {
        if (!event.target) {
            return;
        }
        const val = event.target.value
        const symbols = [...String(val)]
        let checkSymbols = true
        symbols.forEach((symbol, index) => {
            console.log(symbol)
            if (index === 0 && symbol !== '0') {
                checkSymbols = false
            }
            if (index === 1 && symbol !== 'x') {
                checkSymbols = false
            }
            if (index > 1 && addrSymbols.indexOf(symbol) === -1) {
                checkSymbols = false
            }
        })

        if (checkSymbols) {
            enterAddress(val)
        }
    }

    const MintPlasma = () => {
        const env = window.ethereum
        if (!env) {
            return null
        }
        return null
    }

    return(
        <Ctnr>
            <Form>
                <h3>Plasma token faucet</h3>
                <h5>Amount : </h5>
                <input type="number" value={amount} onChange={UpdateAmount} />
                <h5>Address to : </h5>
                <input type="text" value={address} onChange={UpdateAddress} />
                <button type="button" onClick={MintPlasma}>
                    Get plasma
                </button>
            </Form>   
        </Ctnr>
    )
}

export default Faucet