import bodyParser from 'body-parser'

import messages from './dummy/messages'
import reply from './dummy/reply'


export default (app) => {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.post('/sendMessage', (req, res) => {

    if(!req.body.inputChat){
      res.json(messages[0])
    }else{
      res.json(reply())
    }

    res.send()
  })

  return app
}
