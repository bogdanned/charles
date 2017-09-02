import React, {Component} from 'react'
import Typist from 'react-typist'

const phrases = [
  "instant quotes for your new bathroom",
  "advices realted to your bathroom renovation"
]


export default class MyComponent extends Component {
  constructor(props){
    super(props)
    this.onTypingDone = this.onTypingDone.bind(this)
  }
  onTypingDone() {

  }
  render() {
    return(
      <Typist avgTypingDelay={40}>
        {phrases[1]}
        <br />
        {phrases[2]}
      </Typist>
    )
  }
}
