import React from 'react'
import styled from 'styled-components'

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

const BenefitImage = styled.img`
  width: 150px;
`

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  max-width: 250px;
  text-align: center;
`

export default () => (
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
)
