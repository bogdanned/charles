import React from 'react'
import styled from 'styled-components'

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
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

const FooterLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5rem;
  padding: 1rem;
  color: ${props => props.theme.secondaryColor};
  font-weight: 700;
`

export default() => (
  <Footer>
    <FooterContent>
      <FooterLink><h3>Lohnbot.ai</h3></FooterLink>
      <FooterLink><h3>How it works</h3></FooterLink>
      <FooterLink><h3>Pricing</h3></FooterLink>
      <FooterLink><h3>Contact</h3></FooterLink>
    </FooterContent>
  </Footer>
)
