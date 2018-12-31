const express = require("express")

const router = express.Router()



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