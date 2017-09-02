import React from 'react'
import styled from 'styled-components'
import {compose} from 'recompose'
import {connect} from 'react-redux'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: center;
  height: 400px;
  width: 600px;
  border: 1px solid ${props => props.theme.primaryColor};
`

const UserMessage = styled.p`
  background: #3498db;
  color: white;
  padding-right: 15px;
  padding-left: 13px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`


const ConvBox = ({messages}) => {
  const renderMessages = messages.map((message)=>(
    <UserMessage>{message}</UserMessage>
  ))
  return(
    <Root>
      {renderMessages}
    </Root>
  )
}


export default compose(
  connect(({chat: {sentMessages}})=>({
    messages: sentMessages
  }))
)(ConvBox)
