import _ from 'lodash'

export default (messages, {nextId}) => {
  return messages.find((m)=>(m.id == nextId))
}
