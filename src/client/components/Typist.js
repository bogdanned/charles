import React, {Component} from 'react'
import Typist from 'react-typist'

const typedText = [
  "instant quotes for your new bathroom",
  "advices realted to your bathroom renovation"
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
    console.log(this.state.textIndex, typedText.length - 1)
    if(this.state.textIndex <= typedText.length) {
      this.setState({textIndex: this.state.textIndex + 1})
    }else if(this.state.textIndex > typedText.length - 1) {
      this.setState({textIndex: 0})
    }
  }

  render() {
    return(
      <Typist key={this.state.textIndex} avgTypingDelay={90} onTypingDone={this.onTypingDone} startDelay={1000}>
        {typedText[this.state.textIndex]}
      </Typist>
    )
  }
}
