const express = require("express")

const router = express.Router()

const userDB = require('../data/helpers/userDb')

const middleware = require('../middleware')

const upperCase = middleware.upperCaser

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
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

router.post('/', upperCase, (req, res) => {
 const { name } = req.body
 console.log(req.body)
 if ({name}) {
 userDB
  .insert({name})
  .then((user) => {
   res
    .status(201)
    .json(user)
  })  
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error adding user to Database."})
  })
 }
})

router.put('/:id', upperCase, (req, res) => {
 const { id } = req.params
 const user = req.body
  userDB
  .update(id, user)
  .then(user => {
   res
    .send(user)
  })
  .catch(() => {
   res
    .status(500)
    .json({message: "Error editing user."})
  })
})

router.delete('/:id', (req, res) => {
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