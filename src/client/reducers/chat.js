const initialState = {
  sentMessages: [],
  receivedMessages: [],
  lastReceivedMessage: null,
  conversation: []
}


export default function(state=initialState, action) {
  switch(action.type){
    case "STORE_MESSAGE":
    console.log(action.payload, "paylaod")
      return {
        ...state,
        conversation: state.conversation.concat([action.payload])
      }
    case "SEND_MESSAGE":
      return {
        ...state,
        sentMessages: state.sentMessages.concat([action.payload.inputChat]),
      }
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        receivedMessages: state.receivedMessages.concat([action.payload]),
        lastReceivedMessage: action.payload
      }
    default:
      return state
  }
}
