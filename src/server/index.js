import express from "express"
import setup from "./setup"

const app = express()

setup(app)

app.get('/', (req, res) => res.sendfile('./public/index.html'))


const server = app.listen(3000)

process.on("SIGINT", () => {
  server.close(() => process.exit(0))
})
