import React from 'react'
import styled from 'styled-components'


export const StyledH1 = styled.h1`
  font-size: 40px;
`

export const DetailText = styled.h3`
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

export default() => (
  <Root>
    <StyledH1><strong>lohnbot.ai</strong></StyledH1>
    <StyledH1>Your personal bathroom planner</StyledH1>
    <DetailText>Juts tell me your bathroom doubts and concerns</DetailText>
    <form>
      <input type ="text" placeholder="Enter your email" name="email"/>
      <button type="submit">Sign up</button>
    </form>
  </Root>
)
