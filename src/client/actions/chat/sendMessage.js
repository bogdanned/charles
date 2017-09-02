

async function fetchReply(message){
  const reply = await fetch()
  return reply
}


export default ({inputChat}) => {
  return {type: "SEND_MESSAGE", payload: {inputChat}}
}
