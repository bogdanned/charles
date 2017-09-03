import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {compose, withHandlers, lifecycle} from "recompose"

import * as actions from "../actions"
import Options from "./Options"

const Root = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`

const MessagesBox = styled.div`
  width: 100%;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 400px;
  border-radius: 0.25rem 0.25rem 0rem 0rem;
`
const ChatMessage = styled.p`
  background: red;
  color: white;
  padding-right: 15px;
  padding-left: 13px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0.25rem;
`

const UserMessage = styled.p`
  background: #3498db;
  color: white;
  padding-right: 15px;
  padding-left: 13px;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0.25rem;
`

const StyledButton = styled.button`
  border: none;
  color: ${props => props.theme.primaryColor};
  background-color: transparent;
  :hover {
    color: ${props => props.theme.brandColor}
  }
`

const StyledInput = styled.input`
  width: 95%;
  padding: 1rem;
  :focus{
    outline: #3498db;
  }
  border: none;
  border-radius: 0 0 0.25rem 0.25rem;
`

const ChatContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`

const ChatHeader = styled.div`
  padding: 0.5rem;
  background-color: ${props => props.theme.brandColor};
  color: ${props => props.theme.secondaryColor};
  border-radius: 0.25rem 0.25rem 0 0;
`

const ChatFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`

const StyledField = styled(Field)`
`

const renderInput = ({input})=>(
  <StyledInput {...input} placeholder="Write a question..."/>
)

const LastReceivedMessage = ({message})=>{
  if(message && message.type == "multiOption"){
    return(
      <div>
        <ChatMessage>{message.text}</ChatMessage>
      </div>
    )
  }else{
    return null
  }
}


const ConvBox = ({submitting, pristine, handleSubmit, lastReceivedMessage}) => {
  return(
    <Root>
      <ChatContainer>
        <ChatHeader><p>Lohnbot</p></ChatHeader>
        <MessagesBox>
          <LastReceivedMessage message={lastReceivedMessage}/>
          <Options lastReceivedMessage={lastReceivedMessage}/>
        </MessagesBox>
        <ChatFooter>
          <StyledField component={renderInput} name={'inputChat'}></StyledField>
          <StyledButton type="submit" disabled={pristine || submitting} onClick={handleSubmit}></StyledButton>
        </ChatFooter>
      </ChatContainer>
    </Root>
  )
}


export default compose(
  connect(({chat: {sentMessages, receivedMessages, lastReceivedMessage}})=>({
    sentMessages,
    receivedMessages,
    lastReceivedMessage
  })),
  lifecycle({
    componentDidMount(){
      this.props.dispatch(actions.fetchReplyMessage({inputChat: null}))
    }
  }),
  withHandlers({
    onSubmit: ({dispatch}) => (values, _dispatch, props) => {
      dispatch(actions.fetchReplyMessage(values))
      props.reset()
    }
  }),
  reduxForm({
    form: 'chat',
  })
)(ConvBox)
