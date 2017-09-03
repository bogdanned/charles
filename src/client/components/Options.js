import React from 'react'
import styled from 'styled-components'
import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'

import * as actions from '../actions'

const OptionsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.25rem;
`
const Option = styled.button`
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  flex-grow: 1;
`

let Options = ({lastReceivedMessage, onOptionClick}) => (
  <OptionsBox>{lastReceivedMessage &&
    lastReceivedMessage.options.map((o) => (<Option onClick={(e) => onOptionClick(e, o)} key={o.value}>{o.label}</Option>))}</OptionsBox>
)

export default compose(
  connect(),
  withHandlers({
    onOptionClick: ({dispatch}) => (e, value) => {
      e.preventDefault()
      console.log(value, "asdasd")
      dispatch(actions.fetchReplyMessage({inputChat: value}))
    }
  })
)(Options)
