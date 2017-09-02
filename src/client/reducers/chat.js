const initialState = {
  sentMessages: [],
  receivedMessages: ["Hey Human!","Forget about your boyfriend .. !","...and meet me at the hotel"],
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
