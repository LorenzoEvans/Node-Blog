const express = require("express")

const router = express.Router()

router.get('/api/users', (req, res) => {
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

router.get('/api/users/:id', (req, res) => {
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

router.post('/api/users', upperCase, (req, res) => {
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

router.put('/api/users/:id', (req, res) => {
 userDB.update(user)
 .then()
 .catch()
})

router.delete('/api/users/:id', (req, res) => {
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

module.exports = router 