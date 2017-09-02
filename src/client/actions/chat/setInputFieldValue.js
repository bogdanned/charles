export default (message) => {
  console.log(message, 'message')
  return {type: "SET_INPUT_FIELD_VALUE", payload: message}
}
