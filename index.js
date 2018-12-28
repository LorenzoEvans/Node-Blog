const express = require("express")
const helmet = require("helmet")
const morganLog = require("morgan")
const PORT = 4090

const userDB = require("./data/helpers/userDb")
const postDB = require("./data/helpers/postDb")

server.use(
 express.json(),
 helmet(),
 morganLog()
)

server.get('/api/users', (req, res, next) => {
 userDB.get()
 .then()
 .catch()
})

server.get('/api/users/:id', (req, res, next) => {
 const { id } = req.params
 userDB.get(id)
})

server.post('/api/users', (req, res, next) => {
 const { userId, text } = req.body
 userDB.insert(post)
 .then({userId, text})
})

server.put('/api/users/:id', (req, res, next) => {
 userDB.update()
})
server.listen(PORT, () => {
 console.log(`Server running live on portn ${PORT}`)
})