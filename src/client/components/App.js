import React from 'react'
import styled from 'styled-components'


const Root = styled.div`

`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Footer = styled.div`

`

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Benefits = styled.div`
  display: flex;
  flex-direction: row;
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
`

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.div`

`

const Statement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const AiForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`



export default () => (
  <Root>
    <Body>
      <UpperSection>
        <Logo>
          <h1>Magnus.ai</h1>
        </Logo>
        <Statement>
          <h1>Get <strong>instant quotes for your heating system</strong></h1>
          <h3>Your personal advisor that helps you with bathroom planning and renovation</h3>
        </Statement>
        <AiForm>
          <StyledForm>
            <input type = "text" />
            <button type="submit">Send</button>
          </StyledForm>
        </AiForm>
      </UpperSection>
      <Benefits>
        <Benefit>
          <img href="" />
          <p>Does your bathroom need a renovation or repair?</p>
        </Benefit>
        <Benefit>
          <img href="" />
          <p>Message me with your bath related doubts</p>
        </Benefit>
        <Benefit>
          <img href="" />
          <p>Get indications and quotes from Magnus</p>
        </Benefit>
      </Benefits>
      <Presentation>
        <h1><strong>Hi, I'am Magnus</strong></h1>
        <h3>Your bathroom renovation personal assistant.
          Ask me about quotes, specifications,  equipment you would like to install, and anything related with your new bathroom or bathroom renovation.
          I will use magic to give you the best recommendations for your new bathroom.
        </h3>
        <h3>Email me to:</h3>
        <h3><strong>magnus@maguns.ai</strong></h3>
      </Presentation>
      <ContactSection>
        <h1>magus.ai</h1>
        <h1>Your personal bathroom planner</h1>
        <h3>Juts tell me your bathroom doubts and concerns</h3>
        <form>
          <input type = "text" palceholder={"Enter your email"}/>
          <button type="submit">Sign up</button>
        </form>
      </ContactSection>
    </Body>
    <Footer></Footer>
  </Root>
)
