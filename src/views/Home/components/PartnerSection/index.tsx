import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, Button, Link } from 'vorpaltesttoolkit'
import { Link as RouterLink } from 'react-router-dom'
import { logos } from './data'

const PartnerSection = () => {

    const  singleWidth = `${100 / logos.length}%`

    return(
        <Flex flexDirection="column" mt="40px" mb="60px" alignItems="center">
           <Heading  scale="xl" color="primary" fontSize="60px">Our partners</Heading>
           <Flex mt="40px" mb="60px" flexWrap="wrap" width="100%">
              {logos.map((item) => {
                return(
                    <a href={item.link} target="_blank" rel="noreferrer" style={{
                        width: singleWidth,
                        margin: 40
                    }}>
                        <img style={{
                            width: "100%"
                        }} src={item.img} alt={item.name} />
                    </a>
                )
              })}
           </Flex>
        </Flex>
    )
}

export default PartnerSection