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
`

const AiForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledInput = styled.input`
  height: 40px;
  width: 600px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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

const ConvBox = () => {
  const renderMessages = messages.map((message)=>(
    <UserMessage>{message}</UserMessage>
  ))
  return(
    <Root>
      <MessagesBox>
        {renderMessages}
      </MessagesBox>
      <ChatContainer>
        <AiForm>
          <StyledForm>
            <Field component={renderInput} ></Field>
            <Button type="submit">Send</Button>
          </StyledForm>
        </AiForm>
      </ChatContainer>
    </Root>
  )
}


export default compose(
  connect(),
  withHandlers({
    sendMessage: ({dispatch}) => (value) => {
      dispatch(actions.sendMessage(value))
    },
    handleChange: ({dispatch}) => (value) => {
      dispatch(actions.setInputFieldValue(value))
    }
  }),
  reduxForm({
    form: 'chat'
  })
)(ConvBox)
