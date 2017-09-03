import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {compose, withHandlers} from "recompose"
import * as actions from "../actions"


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
  justify-content: flex-start;
  align-items: flex-start;
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

const StyledButton = styled.button`
  height: 31px;
  margin-top: 5px;
  background: #3498db;
  border: none;
  color: white;
  font-size: 18px;
  flex-grow: 4;
  :disabled{
    background: #ECECEC;
  }
  :focus{
    outline: #3498db;
  }
`

const StyledInput = styled.input`
  height: 40px;
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
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
`

const StyledField = styled(Field)`
  flex-grow: 1;
`

const renderInput = ({input})=>(
  <StyledInput {...input} placeholder="Write a question..."/>
)

const ConvBox = ({sentMessages, receivedMessages, submitting, pristine, handleSubmit}) => {
  const messages = sentMessages.map((message, index)=>(
    <div>
      {receivedMessages[index] ? <ChatMessage>{receivedMessages[index]}</ChatMessage> : null}
      {sentMessages[index] ? <UserMessage>{sentMessages[index]}</UserMessage> : null}
    </div>
  ))
  return(
    <Root>
      <ChatContainer>
        <ChatHeader><p>Lohnbot</p></ChatHeader>
        <MessagesBox>
          {messages}
        </MessagesBox>
        <ChatFooter>
          <StyledField component={renderInput} name={'inputChat'}></StyledField>
          <StyledButton type="submit" disabled={pristine || submitting} onClick={handleSubmit}><i className="fa fa-paper-plane-o fa-lg"></i></StyledButton>
        </ChatFooter>
      </ChatContainer>
    </Root>
  )
}


export default compose(
  connect(({chat: {sentMessages, receivedMessages}})=>({
    sentMessages,
    receivedMessages
  })),
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
