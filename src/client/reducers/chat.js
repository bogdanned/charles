const initialState = {
  sentMessages: [],
  inputValue: ""
}


export default function(state=initialState, action) {
  switch(action.type){
    case "SEND_MESSAGE":
      return {
        ...state,
        sentMessages: state.sentMessages.concat([state.inputValue]),
        inputValue: ""
      }
    case "SET_INPUT_FIELD_VALUE":
      return {
        ...state,
        inputValue: action.payload
      }
    default:
      return state
  }
}
