export default (message) => {
  return {type: "RECEIVE_MESSAGE", payload: message}
}
