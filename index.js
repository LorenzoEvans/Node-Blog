const express = require("express")
const helmet = require("helmet")
const morganLog = require("morgan")
const PORT = 4090
const upperCaser = require('./middleware')
const server = express()
const userDB = require("./data/helpers/userDb")
const postDB = require("./data/helpers/postDb")

server.use(
 express.json(),
 helmet(),
 morganLog('tiny')
)

server.get('/api/users', (req, res, next) => {
 userDB
 .get()
  .then(((users, response) => {
   res
   .json(users)
  }))
  .catch(() => {
   res
   .status(500)
   .json({error: "There was an error getting users."})
  })
})

server.get('/api/users/:id', (req, res, next) => {
 const { id } = req.params
 userDB.get(id)
 .then((user) => {
  console.log(user)
  res
   .json(user)
 })
 .catch(() => {
  res
   .status(500)
   .json({error: "There was an error getting the user."})
 })
})

server.post('/api/users', (req, res, next) => {
 const { name } = req.params
 userDB.insert({ name })
 .then(({ name }) => {
  res
   .send({ name} )
 })
 .catch(() => {
  res
   .status(500)
   .json({message: "There was an error adding user to the database."})
 })
})

server.put('/api/users/:id', (req, res, next) => {
 userDB.update(user)
})

server.delete('/api/users/:id', (req, res, next) => {
 userDB.remove(user)
})

// Posts endpoints 

server.get('/api/posts', (req, res, next) => {
 postDB.get()
 .then()
 .catch()
})
server.listen(PORT, () => {
 console.log(`Server running live on port ${PORT}`)
})