const initialState = {
  sentMessages: []
}


export default function(state=initialState, action) {
  switch(action.type){
    case "SENT_MESSAGE":
      return {
        ...state,
        sentMessages: state.sentMessages.concat([action.payload])
      }
    default:
      return state
  }
}
