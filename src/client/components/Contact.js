import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import {compose, withHandlers} from 'recompose'

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding: 0 1rem 0 1rem;
`

const SubTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  padding: 0 1rem 0 1rem;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const DetailText = styled.h5`
  padding: 0 1rem 0 1rem;
  font-weight: lighter;
  color: ${props => props.theme.secondaryFontColor};
  text-align: center;
`

const Root = styled.div`
  width: 100%;
  padding: 4rem 0 4rem 0;
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
    <Title><strong>Charles.ai</strong></Title>
    <SubTitle><strong>Your personal bathroom planner</strong></SubTitle>
    <DetailText>Juts tell me your bathroom doubts and concerns</DetailText>
    <FormBox>
      <form>
        <StyledInput type ="text" placeholder="Enter your email" name="email"/>
        <SendButton type="submit" onClick={(e) => onSubmit(e)}><h6>Sign up</h6></SendButton>
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
