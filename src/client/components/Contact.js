import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
`

export default() => (
  <Root>
    <h1><strong>LohnBot.ai</strong></h1>
    <h1>Your personal bathroom planner</h1>
    <h3>Juts tell me your bathroom doubts and concerns</h3>
    <form>
      <input type ="text" placeholder="Enter your email" name="email"/>
      <button type="submit">Sign up</button>
    </form>
  </Root>
)
