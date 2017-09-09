import bodyParser from 'body-parser'

import messages from './dummy/messages'
import badMessages from './dummy/bathroom'
import reply from './dummy/reply'


export default (app) => {
  app.use(bodyParser.json()) // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.post('/sendMessage', (req, res) => {

    const allMessages = messages.concat(badMessages)

    if(!req.body.inputChat){
      res.json(allMessages[0])
    }else{
      res.json(reply(allMessages, req.body.inputChat))
    }

    res.send()
  })

  return app
}
