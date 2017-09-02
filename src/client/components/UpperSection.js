import React from 'react'
import styled from 'styled-components'

import Typist from './Typist'
import ConversationBox from './ConversationBox'


const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.secondaryColor};
`

const Logo = styled.img`
  width: 30px;
  padding: 0.25rem;
`

const StatementBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Statement = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: flex-start;
  width: 700px;
`

const SubStatement = styled.div`
  display: flex;
`

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
`

const LogoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Name = styled.h3`
  font-weight: 800;
`

const Ext = styled.h3`
`

const Still = styled.h1`
  padding-right: 0.5rem;
  font-weight: lighter;
`

const Typed = styled.h1`

`

export default() => (
  <Root>
    <LogoBox>
      <Logo src="https://image.flaticon.com/icons/svg/202/202483.svg"></Logo>
      <LogoText><Name>Lohnbot</Name><Ext>.ai</Ext></LogoText>
    </LogoBox>
    <StatementBox>
      <Statement>
        <Still>Get</Still><Typed><strong><Typist /></strong></Typed>
      </Statement>
      <SubStatement>
        <h3>Your personal advisor that helps you with bathroom planning and renovation</h3>
      </SubStatement>
    </StatementBox>
    <ConversationBox />
  </Root>
  )
