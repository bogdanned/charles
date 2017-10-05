const initialState = {
  sentMessages: [],
  receivedMessages: [],
  lastReceivedMessage: null,
  conversation: [],
  isTyping: false
}


export default function(state=initialState, action) {
  switch(action.type){
    case "STORE_MESSAGE":
      return {
        ...state,
        conversation: state.conversation.concat([action.payload])
      }
    case "SEND_MESSAGE":
      return {
        ...state,
        isTyping: true,
        sentMessages: state.sentMessages.concat([action.payload.inputChat]),
      }
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        receivedMessages: state.receivedMessages.concat([action.payload]),
        lastReceivedMessage: action.payload,
        isTyping: false
      }
    default:
      return state
  }
}
