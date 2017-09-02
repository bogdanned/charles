import React, {Component} from 'react'
import Typist from 'react-typist'

const typedtext = [
  "instant quotes for your new bathroom",
  "advices realted to your bathroom renovation"
]


export default class MyComponent extends Component {
  render() {
    return(
      <Typist avgTypingDelay={40} onTypingDone={this.next}>
        {
        typedtext.map((item) => {
               <span key={item}>
                   <h1>{item}</h1>
               </span>
          })
      }
      </Typist>
    )
  }
}
