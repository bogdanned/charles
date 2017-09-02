import reply from './dummy/reply'

export default (app) => {

  app.get('/sendMessage', (req, res) =>{
    console.log('send message')
    res.json(reply())
    res.send()
  })

  return app
}
