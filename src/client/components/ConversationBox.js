import React from 'react'
import styled from 'styled-components'
import {compose} from 'recompose'
import {connect} from 'react-redux'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 400px;
  width: 600px;
  border: 1px solid ${props => props.theme.primaryColor};
`


const ConvBox = ({messages}) => {
  const renderMessages = messages.map((m)=>(
    <p>{m}</p>
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
