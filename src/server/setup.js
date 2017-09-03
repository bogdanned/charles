import reply from './dummy/reply'

export default (app) => {

  app.post('/sendMessage', (req, res) =>{
    res.json(reply())
    res.send()
  })

  return app
}
