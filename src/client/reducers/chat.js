const initialState = {
  sentMessages: [],
}


export default function(state=initialState, action) {
  switch(action.type){
    case "SEND_MESSAGE":
      return {
        ...state,
        sentMessages: state.sentMessages.concat([action.payload.inputChat]),
      }
    default:
      return state
  }
}
