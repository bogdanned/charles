import fetch from 'isomorphic-fetch'
import sendMessage from './sendMessage'


export default (message) => {
  return async function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(sendMessage(message))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return await fetch({
      method : 'POST',
      url: '/sendMessage',
      body: message
    })
  }
}
