const initialState = {
  sentMessages: [],
  receivedMessages: [],
}


export default function(state=initialState, action) {
  switch(action.type){
    case "SEND_MESSAGE":
      return {
        ...state,
        sentMessages: state.sentMessages.concat([action.payload.inputChat]),
      }
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        receivedMessages: state.receivedMessages.concat([action.payload]),
      }
    default:
      return state
  }
}
