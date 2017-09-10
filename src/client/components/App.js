import React from 'react'
import styled from 'styled-components'
import {Route} from 'react-router-dom'

import Home from './Home'
import ConversationBox from './ConversationBox'


const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Root>
    <Home />
    <Route exact path="/" component={Home}/>
    <Route path="/bot" component={ConversationBox}/>
  </Root>
)
