import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {compose, withHandlers} from "recompose"
import * as actions from "../actions"


const Root = styled.form`

`

const MessagesBox = styled.div`
  display: flex;
  overflow-y: scroll;
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

const Button = styled.button`
  height: 31px;
  margin-top: 5px;
  background: #3498db;
  border: none;
  color: white;
  font-size: 18px;
  :disabled{
    background: #ECECEC;
  }
  :focus{
    outline: #3498db;
  }
`

const StyledInput = styled.input`
  height: 40px;
  width: 600px;
  :focus{
    outline: #3498db;
  }
`

const ChatContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const renderInput = ({input})=>(
  <StyledInput {...input}/>
)

const ConvBox = ({messages, submitting, pristine, handleSubmit}) => {
  const renderMessages = messages.map((message)=>(
    <UserMessage>{message}</UserMessage>
  ))
  return(
    <Root>
      <MessagesBox>
        {renderMessages}
      </MessagesBox>
      <ChatContainer>
        <Field component={renderInput} name={'inputChat'} ></Field>
        <Button type="button" disabled={pristine || submitting} onClick={handleSubmit}>Send</Button>
      </ChatContainer>
    </Root>
  )
}


export default compose(
  connect(({chat: {sentMessages}})=>({
    messages: sentMessages
  })),
  withHandlers({
    onSubmit: ({dispatch}) => (values, _dispatch, props) => {
      dispatch(actions.sendMessage(values))
      props.reset()
    }
  }),
  reduxForm({
    form: 'chat',
  })
)(ConvBox)
