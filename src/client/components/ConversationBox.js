import React from 'react'
import styled from 'styled-components'


const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 400px;
  width: 600px;
  border: 1px solid ${props => props.theme.primaryColor};
`


export default () => {
  return(
    <Root>sss</Root>
  )
}
