import React from 'react'
import styled from 'styled-components'
import ConversationBox from './ConversationBox'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Footer = styled.div`
  min-height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: ${props => props.theme.primaryColor};
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  max-width: 250px;
  text-align: center;
`

const Presentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: ${props => props.theme.secondaryColor};
  padding: 2rem;
`

const ContactSection = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
`

const Logo = styled.img`
  width: 30px;
  padding: 0.25rem;
`



const Statement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `



const BenefitImage = styled.img`
  width: 150px;
`

const FooterLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5rem;
  padding: 1rem;
  color: ${props => props.theme.secondaryColor};
  font-weight: 700;
`

const StyledH1 = styled.h1`
  font-size: 40px;
`

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
`

const LogoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Name = styled.h3`
  font-weight: 800;
`


const Ext = styled.h3`
`

const Detail = styled.div`
  margin: 3rem;
  text-align: center;
`

const DetailText = styled.h3`
  color: ${props => props.theme.secondaryFontColor};
`

const StyledEmail = styled.h3`
  color: ${props => props.theme.brandColor};
`

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
`

export default () => (
  <Root>
      <UpperSection>
        <LogoBox>
          <Logo src="https://image.flaticon.com/icons/svg/202/202483.svg"></Logo>
          <LogoText><Name>Lohnbot</Name><Ext>.ai</Ext></LogoText>
        </LogoBox>
        <Statement>
          <h1>Get <strong>instant quotes for your heating system</strong></h1>
          <h3>Your personal advisor that helps you with bathroom planning and renovation</h3>
        </Statement>
        <ConversationBox></ConversationBox>
      </UpperSection>
      <Benefits>
        <Benefit>
          <BenefitImage src="https://image.freepik.com/free-vector/bathroom-background-design_1294-83.jpg"/>
          <h4><strong>Does your bathroom need a renovation or repair?</strong></h4>
        </Benefit>
        <Benefit>
          <BenefitImage src="https://image.flaticon.com/icons/svg/321/321817.svg"/>
          <h4><strong>Message me with your bath related doubts</strong></h4>
        </Benefit>
        <Benefit>
          <BenefitImage src="https://image.flaticon.com/icons/svg/222/222567.svg"/>
          <h4><strong>Get indications and quotes from LohnBot</strong></h4>
        </Benefit>
      </Benefits>
      <Presentation>
        <StyledH1><strong>Hi, I'am Lohnbot</strong></StyledH1>
        <Detail>
          <DetailText>Your bathroom renovation personal assistant.
            Ask me about quotes, specifications,  equipment you would like to install, and anything related with your new bathroom or bathroom renovation.
            I will use magic to give you the best recommendations for your new bathroom.
          </DetailText>
        </Detail>
        <EmailSection>
          <DetailText>Email me to:</DetailText>
          <StyledEmail><strong>lohnbot@lohnbot.ai</strong></StyledEmail>
        </EmailSection>
      </Presentation>
      <ContactSection>
        <h1><strong>LohnBot.ai</strong></h1>
        <h1>Your personal bathroom planner</h1>
        <h3>Juts tell me your bathroom doubts and concerns</h3>
        <form>
          <input type ="text" placeholder="Enter your email" name="email"/>
          <button type="submit">Sign up</button>
        </form>
      </ContactSection>
      <Footer>
        <FooterContent>
          <FooterLink><h3>Lohnbot.ai</h3></FooterLink>
          <FooterLink><h3>How it works</h3></FooterLink>
          <FooterLink><h3>Pricing</h3></FooterLink>
          <FooterLink><h3>Contact</h3></FooterLink>
        </FooterContent>
      </Footer>
  </Root>
)
