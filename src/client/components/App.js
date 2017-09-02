import React from 'react'
import styled from 'styled-components'

import UpperSection from './UpperSection'
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

export default () => (
  <Root>
    <UpperSection />
    <Benefits/>
    <Presentation/>
    <Contact/>
    <Footer/>
  </Root>
)
