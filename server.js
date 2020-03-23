const express = require('express')

const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)

io.on('connection', socket => {
  socket.on('streaming', data => {
    socket.broadcast.emit('watching', data)
  })
})

app.use(express.json());

httpServer.listen(3500, () => {
  console.log(`Running on http://localhost:3500`)
})

process.on("SIGINT", () => {
  console.log("Exiting process.")
  process.exit()
})