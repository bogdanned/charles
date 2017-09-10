import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import {compose, withHandlers} from 'recompose'

const StyledH1 = styled.h1`
  font-size: 36px;
  text-align: center;
`

const DetailText = styled.h3`
  font-weight: lighter;
  color: ${props => props.theme.secondaryFontColor};
  text-align: center;
`

const Root = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.terciaryFontColor};
`

const StyledInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.25rem;
  :focus{
    outline: none;
  }
`

const FormBox = styled.div`
  margin: 2rem;
`

const SendButton = styled.button`
  align-self: center;
  background-color: ${props => props.theme.brandColor};
  border: none;
  color: white;
  padding: 0.5rem;
  :focus{
    outline: none;
  }
  :hover{
    background-color: ${lighten(0.05, '#27AE61')};
  }
  margin-bottom: 10px;
`

let Contact = ({onSubmit}) => (
  <Root>
    <StyledH1><strong>lohnbot.ai</strong></StyledH1>
    <StyledH1><strong>Your personal bathroom planner</strong></StyledH1>
    <DetailText>Juts tell me your bathroom doubts and concerns</DetailText>
    <FormBox>
      <form>
        <StyledInput type ="text" placeholder="Enter your email" name="email"/>
        <SendButton type="submit" onClick={(e) => onSubmit(e)}><h5>Sign up</h5></SendButton>
      </form>
    </FormBox>
  </Root>
)

export default compose(
  withHandlers({
    onSubmit: () => (e) => {
      e.preventDefault()
    }
  })
)(Contact)
