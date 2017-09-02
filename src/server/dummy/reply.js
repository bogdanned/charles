import _ from 'lodash'

export default () => ({
  sentAt: new Date(),
  text: _.uniqID('Random message number '),
  author: 'bot'
})
