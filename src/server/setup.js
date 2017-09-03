import reply from './dummy/reply'
import bodyParser from 'body-parser'


export default (app) => {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.post('/sendMessage', (req, res) => {

    console.log(req.body, "req body")

    res.json(reply())

    res.send()
  })

  return app
}
