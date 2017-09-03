import fetch from 'isomorphic-fetch'
import sendMessage from './sendMessage'
import receiveMessage from './receiveMessage'


export default (message) => {
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(sendMessage(message))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    /*
    fetch({
      method : 'POST',
      url: 'http://127.0.0.1:3000/sendMessage',
      body: message
    }).then(res => res.json(),
            error => console.log('An error occured.', error))
      .then(json => console.log(json))*/

    return fetch(`https://www.reddit.com/r/`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      ).then(json => console.log(json))
  }
}
