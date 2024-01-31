import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, Button, Link } from 'vorpaltesttoolkit'
import { Link as RouterLink } from 'react-router-dom'
import { logos } from './data'

const PartnerFlex = styled(Flex)`

  flex-wrap: nowrap;

  a {
    width: 50%
  }

  a.elem--first {
    border-right: 1px solid #ACF800;
  }

${({ theme }) => theme.mediaQueries.mobile} {
    flex-wrap: wrap;

    a {
        width: 100%
      }

    a.elem--first {
        border-right: none;
        border-bottom: 1px solid #ACF800;
    }
}
`

const PartnerSection = () => {

    const  singleWidth = `${100 / logos.length}%`

    return(
        <Flex flexDirection="column" mt="40px" mb="60px" alignItems="center">
           <Heading  scale="xl" color="primary" fontSize="60px">Our partners</Heading>
           <PartnerFlex mt="40px" mb="60px" width="100%">
              {logos.map((item, index) => {
                return(
                    <a href={item.link} className={index > 0 ? "elem--second" : "elem--first"} target="_blank" rel="noreferrer" style={{
                        margin: 0,
                        padding: 40
                    }}>
                        <img style={{
                            width: "100%"
                        }} src={item.img} alt={item.name} />
                    </a>
                )
              })}
           </PartnerFlex>
        </Flex>
    )
}

export default PartnerSection