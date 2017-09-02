import React from 'react'
import styled from 'styled-components'


const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.brandColor};
`

const UpperSection = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: ${props => props.theme.secondaryColor};
`

const Benefits = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 2rem;
  background-color: ${props => props.theme.primaryColor};
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
`

const Presentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: ${props => props.theme.secondaryColor};
`

const ContactSection = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
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

const BenefitImage = styled.img`
  width: 150px;
`

const FooterLink = styled.div`

`


export default () => (
  <Root>
      <UpperSection>
        <Logo>
          <h1>LohnBot.ai</h1>
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
          <BenefitImage src="https://image.freepik.com/free-vector/bathroom-background-design_1294-83.jpg"/>
          <p><strong>Does your bathroom need a renovation or repair?</strong></p>
        </Benefit>
        <Benefit>
          <BenefitImage src="https://image.freepik.com/free-vector/white-with-red-and-blue-lines-envelope-design_1095-114.jpg"/>
          <p><strong>Message me with your bath related doubts</strong></p>
        </Benefit>
        <Benefit>
          <BenefitImage src="https://image.freepik.com/free-vector/construction-worker-avatar-design_1146-18.jpg"/>
          <p><strong>Get indications and quotes from LohnBot</strong></p>
        </Benefit>
      </Benefits>
      <Presentation>
        <h1><strong>Hi, I'am LohnBot</strong></h1>
        <h3>Your bathroom renovation personal assistant.
          Ask me about quotes, specifications,  equipment you would like to install, and anything related with your new bathroom or bathroom renovation.
          I will use magic to give you the best recommendations for your new bathroom.
        </h3>
        <h3>Email me to:</h3>
        <h3><strong>lohnbot@lohnbot.ai</strong></h3>
      </Presentation>
      <ContactSection>
        <h1>LohnBot.ai</h1>
        <h1>Your personal bathroom planner</h1>
        <h3>Juts tell me your bathroom doubts and concerns</h3>
        <form>
          <input type ="text" placeholder="Enter your email" name="email"/>
          <button type="submit">Sign up</button>
        </form>
      </ContactSection>
      <Footer>
        <FooterLink><h3>LohnBot.ai</h3></FooterLink>
        <FooterLink><h3>How it works</h3></FooterLink>
        <FooterLink><h3>Pricing</h3></FooterLink>
        <FooterLink><h3>Contact</h3></FooterLink>
      </Footer>
  </Root>
)
