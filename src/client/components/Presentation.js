import React from 'react'
import styled from 'styled-components'


const Root = styled.div`
  width: 100%;
  padding: 4rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.secondaryColor};
  @media only screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
  }
`

const Detail = styled.div`
  margin: 3rem;
  text-align: center;
`
export const DetailText = styled.h4`
  font-weight: lighter;
  color: ${props => props.theme.secondaryFontColor};
`

const StyledEmail = styled.h3`
  color: ${props => props.theme.brandColor};
`


export const StyledH1 = styled.h1`
`

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Root>
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
  </Root>
)
