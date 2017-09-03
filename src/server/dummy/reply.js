import _ from 'lodash'

export default (messages, {nextId}) => {

  console.log(messages.find((m)=>(m.id == nextId)), "finded ......")
  return messages.find((m)=>(m.id == nextId))
}
