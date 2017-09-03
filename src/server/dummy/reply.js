import _ from 'lodash'

export default (messages, previousValue) => {

  console.log(previousValue)
  console.log(messages.find((m)=>(m.id == previousValue.nextId)), "finded ......")
  return messages.find((m)=>(m.id == nextId))
}
