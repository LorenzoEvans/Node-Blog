const express = require("express")
const helmet = require("helmet")
const morganLog = require("morgan")
const PORT = 4090
const middleware = require('./middleware')
const userRouter = require('./Routers/userRouters')
const server = express()
const userDB = require("./data/helpers/userDb")
const postDB = require("./data/helpers/postDb")

const upperCase = middleware.upperCaser
server.use(
 express.json(),
 helmet(),
 morganLog('tiny'),
 // upperCaser.upperCaser
)

server.get('/api/users', (req, res) => {
 userDB
 .get()
  .then(((users) => {
   res
   .json(users)
  }))
  .catch(() => {
   res
   .status(500)
   .json({error: "There was an error getting users."})
  })
})

server.get('/api/users/:id', (req, res) => {
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

server.post('/api/users', upperCase, (req, res) => {
 const name = req.params.name
 console.log(name)
 userDB.insert(name)
 .then((name) => {
  res
   .send(name)
 })
 .catch(() => {
  res
   .status(500)
   .json({message: "There was an error adding user to the database."})
 })
})

server.put('/api/users/:id', (req, res) => {
 userDB.update(user)
 .then()
 .catch()
})

server.delete('/api/users/:id', (req, res) => {
 const { id } = req.params
 userDB.remove(id)
 .then(() => {
  res
   .json({message: "User was removed from database."})
 })
 .catch(() => {
  res
   .status(500)
   .json({error: "Error removing user from database."})
 })
})

// Posts endpoints 
server.get('/api/posts', (req, res) => {
 postDB.get()
 .then((posts) => {
  res
   .json(posts)
 })
 .catch(() => {
  res
   .json({error: "There was an error retrieving posts."})
 })
})

server.get('/api/posts/:id', (req, res) => {
 const { id } = req.params
 postDB.get(id)
 .then((post) => {
  res
   .json(post)
 })
 .catch(() => {
  res
   .status(500)
   .json({error: "There was an error retrieving post from the database."})
 })
})

server.post('/api/posts', (req, res) => {
 const { id } = req.params.id
 const { text, userID } = req.body
 userID = req.params.id
 userDB.get(id)
 postDB.insert({ text })
 .then(() => {
  res
   .send()
 })
 .catch(() => {

 })
})

server.put('/api/posts/:id', (req, res) => {
 postDB.update()
 .then()
 .catch(() => {

 })
})

server.delete('/api/posts/:id', (req, res) => {
 postDB.remove(id)
 .then(() => {
  res
  .json({message: "Post was removed from the database."})
 })
 .catch(() => {

 })
})

server.listen(PORT, () => {
 console.log(`Server running live on port ${PORT}`)
})