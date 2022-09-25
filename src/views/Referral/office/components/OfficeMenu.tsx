import React from 'react'
import { AutoRenewIcon, Flex, Heading, Text } from 'vorpaltesttoolkit'
import styled, { keyframes } from 'styled-components'
import orderBy from 'lodash/orderBy'

// console.log(document.location)

const OfficeMenu = ({ tabs, active = "" }) => {

  const Menue = styled.div`
    display: flex;
    width: 100%;
    margin: 20px 40px;
    min-height: 20px;
    border-left: 1px solid ${({ theme }) => (active === "" || active === tabs[0].href) ? theme.colors.primary : theme.colors.invertedContrast};
  ` 

  const MenueTab = styled.div`
    border-right: 1px solid ${({ theme }) => theme.colors.invertedContrast};

    &.active {
        border-right: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &.next--active {
        border-right: 1px solid ${({ theme }) => theme.colors.primary};
    }
  ` 

  const menues = [];

  tabs.forEach((tab, index) => {
    let menueClass = (tab.href === active) ? "active" : "";
    let tabUrl = "?tab=";

    if (active === "" && index === 0){ 
        menueClass += " first--active";
    }

    if (index > 0) {
        if(tabs[index - 1].href === active){ 
            menueClass += " prev--active";}
    }

    if (index < tabs.length - 1) {
        if(tabs[index + 1].href === active) menueClass += " next--active";
    }

    tabUrl += tab.href;

    menues.push(
        <MenueTab className={menueClass}>
            <a href={tabUrl}>
                <Text color={(tab.href === active) ? "primary" : "invertedContrast"} 
                 fontWeight="300"
                 ml="20px" mr="20px" >{tab.tab}</Text>
            </a>
        </MenueTab>
    )
  })
  
  return (
    <Menue>
       {menues}
    </Menue>
  )
}

export default OfficeMenu