const express = require('express')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 9999

const rooms = new Map()

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

io.on('connection', socket => {
    console.log('user connected', socket.id)
})

server.listen(PORT, (error) => {
    if(error) {
        throw Error(error)
    }
    console.log(`Server has been started on port ${PORT}...`)
})