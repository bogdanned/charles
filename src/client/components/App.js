import React from 'react'
import styled from 'styled-components'


const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  background-color: white;
`

const Benefits = styled.div`
  display: flex;
  flex-direction: row;
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
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
            <input type = "text" placeholder="Tell me about your bathroom, When was is last renovated, How big is it …"/>
            <button type="submit">Send</button>
          </StyledForm>
        </AiForm>
      </UpperSection>
      <Benefits>
        <Benefit>
          <img src="http://www.freepik.com/free-vector/bathroom-background-design_1076708.html"/>
          <p><strong>Does your bathroom need a renovation or repair?</strong></p>
        </Benefit>
        <Benefit>
          <img src="http://www.freepik.com/free-vector/white-with-red-and-blue-lines-envelope-design_850231.html"/>
          <p><strong>Message me with your bath related doubts</strong></p>
        </Benefit>
        <Benefit>
          <img src="http://www.freepik.com/free-vector/construction-worker-avatar-design_909450.htm"/>
          <p><strong>Get indications and quotes from Magnus</strong></p>
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
          <input type ="text" placeholder="Enter your email" name="email"/>
          <button type="submit">Sign up</button>
        </form>
      </ContactSection>
      <Footer>
        <h3>magnus.ai</h3>
        <h3>How it works</h3>
        <h3>Pricing</h3>
        <h3>Contact</h3>
      </Footer>
  </Root>
)
