import React from 'react'
import styled from 'styled-components'

import ConversationBox from './ConversationBox'
import Benefits from './Benefits'
import Presentation from './Presentation'
import Footer from './Footer'
import Contact from './Contact'


const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const UpperSection = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: ${props => props.theme.secondaryColor};
`

const Logo = styled.img`
  width: 30px;
  padding: 0.25rem;
`

const Statement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default () => (
  <Root>
      <UpperSection>
        <LogoBox>
          <Logo src="https://image.flaticon.com/icons/svg/202/202483.svg"></Logo>
          <LogoText><Name>Lohnbot</Name><Ext>.ai</Ext></LogoText>
        </LogoBox>
        <Statement>
          <h1>Get <strong>instant quotes for your heating system</strong></h1>
          <h3>Your personal advisor that helps you with bathroom planning and renovation</h3>
        </Statement>
        <ConversationBox></ConversationBox>
      </UpperSection>
      <Benefits/>
      <Presentation/>
      <Contact/>
      <Footer/>
  </Root>
)
