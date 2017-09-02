import IOTA from 'iota.lib.js'

const iota = new IOTA({
  host: 'http://localhost',
  port: 14265
})

export default (app) => {


  app.get('/iota', (req, res) => res.send(200, 'IOTA Version: ' + iota.version ))

  app.get('/iota/node-info', async (req, res) => {
    await iota.api.getNodeInfo(function(error, success) {
        if (error) {
          res.status(200).send('Error: ' + error )
        } else {
          res.status(200).send('Node Info: ' + JSON.stringify(success))
        }
    })
  })


  app.get('/iota', (req, res) => res.send(200, 'IOTA Version: ' + iota.version ))


  app.get('/iota/getBalances', (req, res) => {
    const seed = 'FQCDBIETYUYAEPNVLIVGC9XWZWWTSKHQNAMK9BSHETDYOWEFPCDYGCAUNDREAIOHWEM9XLTXDMTYOJRHWQSQXIAXAZ'
    iota.api.getAccountData(seed, (error, success) => {
        if (error) {
          res.status(200).send('Error: ' + error )
        } else {
          res.status(200).send('Node Info: ' + JSON.stringify(success))
        }
      })
    }
  )


  app.get('/iota/attachToTangle', (req, res) => {
    const seed = 'FQCDBIETYUYAEPNVLIVGC9XWZWWTSKHQNAMK9BSHETDYOWEFPCDYGCAUNDREAIOHWEM9XLTXDMTYOJRHWQSQXIAXAZ'
    iota.api.getAccountData(seed, (error, success) => {
        if (error) {
          res.status(200).send('Error: ' + error )
        } else {
          res.status(200).send('Node Info: ' + JSON.stringify(success))
        }
      })
    }
  )


  app.get('/test', (req, res) => res.statues(200).send('IOTA Test: ' ))

}
