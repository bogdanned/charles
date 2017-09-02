import React from 'react'
import styled from 'styled-components'


const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: ${props => props.theme.secondaryColor};
  padding: 2rem;
`

const Detail = styled.div`
  margin: 3rem;
  text-align: center;
`
const DetailText = styled.h3`
  font-weight: lighter;
  color: ${props => props.theme.secondaryFontColor};
`

const StyledEmail = styled.h3`
  color: ${props => props.theme.brandColor};
`


const StyledH1 = styled.h1`
  font-size: 40px;
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
