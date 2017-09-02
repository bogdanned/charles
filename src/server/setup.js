import reply from 'reply'

export default (app) => {

  app.get('/sendMessage', (req, res) =>{
    res.json(reply())
    res.send()
  })

  return app
}
