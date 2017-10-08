import fetch from 'isomorphic-fetch'
import sendMessage from './sendMessage'
import receiveMessage from './receiveMessage'
import storeMessage from './storeMessage'


export default (message) => {
  return async function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(sendMessage(message))

    if(message){
      dispatch(storeMessage(message))
    }


    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    const response = await fetch('http://localhost:5000/getAnwser', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
      body: JSON.stringify({message})
    })

    let reply = await response.json()

    dispatch(receiveMessage(reply.message))
  }
}
