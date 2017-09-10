import React from 'react'
import styled from 'styled-components'

const Benefits = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: ${props => props.theme.primaryColor};
  @media only screen and (max-width: 700px) {
    flex-direction: column;
}
`

const BenefitImage = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  max-width: 250px;
  text-align: center;
`

const BenefitText = styled.h4`
  color: ${props => props.theme.terciaryFontColor};
`

export default () => (
  <Benefits>
    <Benefit>
      <BenefitImage src="https://image.freepik.com/free-vector/bathroom-background-design_1294-83.jpg"/>
      <BenefitText><strong>Does your bathroom need a renovation or repair?</strong></BenefitText>
    </Benefit>
    <Benefit>
      <BenefitImage src="https://image.flaticon.com/icons/svg/321/321817.svg"/>
      <BenefitText><strong>Message me with your bath related doubts</strong></BenefitText>
    </Benefit>
    <Benefit>
      <BenefitImage src="https://image.flaticon.com/icons/svg/222/222567.svg"/>
      <BenefitText><strong>Get quotes and answers to ypur doubts from LohnBot</strong></BenefitText>
    </Benefit>
  </Benefits>
)
