import React from 'react'
import styled from 'styled-components'

import {compose, withHandlers} from 'recompose'

const StyledH1 = styled.h1`
  font-size: 36px;
`

const DetailText = styled.h3`
  font-weight: lighter;
  color: ${props => props.theme.secondaryFontColor};
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
  background-color: ${props => props.theme.brandColor};
  color: ${props => props.theme.secondaryColor};
  padding: 1rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0.25rem;
`

let Contact = ({onSubmit}) => (
  <Root>
    <StyledH1><strong>lohnbot.ai</strong></StyledH1>
    <StyledH1><strong>Your personal bathroom planner</strong></StyledH1>
    <DetailText>Juts tell me your bathroom doubts and concerns</DetailText>
    <FormBox>
      <form>
        <StyledInput type ="text" placeholder="Enter your email" name="email"/>
        <SendButton type="submit" onClick={(e) => onSubmit(e)}>Sign up</SendButton>
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
