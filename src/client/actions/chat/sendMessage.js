export default (message) => {
  return {type: "SEND_MESSAGE", payload: message}
}
