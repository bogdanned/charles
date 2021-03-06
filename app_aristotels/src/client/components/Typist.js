import React, {Component} from 'react'
import Typist from 'react-typist'

const typedText = [
  "instant quotes for your new bathroom",
  "advices related to your bathroom renovation",
    "instant quotes for your new bathroom",
]


export default class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      textIndex: 0
    }
    this.onTypingDone = this.onTypingDone.bind(this)
  }

  onTypingDone() {
    console.log("rendered")
    if(this.state.textIndex < typedText.length) {
      this.setState({textIndex: this.state.textIndex + 1})
    }
}

  render() {
    return(
      <Typist key={this.state.textIndex} avgTypingDelay={90} onTypingDone={() => setTimeout(this.onTypingDone, 1000)}>
        {typedText[this.state.textIndex]}
      </Typist>
    )
  }
}
