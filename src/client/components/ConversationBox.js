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
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.terciaryFontColor};
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0;
`

const UserMessage = styled.p`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.terciaryFontColor};
  margin: 0.25rem;
  padding: 0.5rem;
  text-align: right;
  border-radius: 0.5rem 0.5rem 0 0.5rem;
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

const BotMessagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const UserMessagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const Avatar = styled.img`
  height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

const renderInput = ({input})=>(
  <StyledInput {...input} placeholder="Write a question..."/>
)


const Conversation = ({conversation})=>{
  const items = conversation.map((conv)=>{
    if(conv && conv.text){
      /* is a bot question */
      return(
        <BotMessagesContainer>
          <Avatar src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p64x64/18157598_1651167781563230_8303316443347838395_n.png?oh=1317f29cc00a1254fd051e4890759e78&oe=5A5D1DAB"></Avatar>
          <ChatMessage>{conv.text}</ChatMessage>
        </BotMessagesContainer>
      )
    }else if(conv){
      return(<UserMessagesContainer>
        <UserMessage>{conv.answerText}</UserMessage>
      </UserMessagesContainer>)
    }
  })
  return(
    <div>
      {items}
    </div>
  )
}


const ConvBox = ({conversation, submitting, pristine, handleSubmit, lastReceivedMessage}) => {
  return(
    <Root>
      <ChatContainer>
        <ChatHeader><p>Lohnbot</p></ChatHeader>
        <MessagesBox>
          <Conversation conversation={conversation}></Conversation>
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
  connect(({chat: {conversation, sentMessages, receivedMessages, lastReceivedMessage}})=>({
    sentMessages,
    receivedMessages,
    lastReceivedMessage,
    conversation
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
