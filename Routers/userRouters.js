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

router.post('/', (req, res) => {
 const usrObj = req.body
 console.log(usrObj)
 if (usrObj.name) {
 userDB
  .insert(usrObj)
  .then(usrId => {
   console.log(usrId)
   userDB
    .get(usrId)
    .then(usr => {
     res
      .status(201)
      .send(usr)
      .json(usr)
    })
  })
  .catch(() => {
   res
    .status(500)
    .json({error: "There was an error adding user to Database."})
  })
 }
 else {
  res
   .status(400)
   .json({message: "A name is required to add user to Database."})
 }
})

router.put('/:id', (req, res) => {
 const { id } = req.params
 const { name } = req.body.user
 if (user.name){
  userDB
  .update(name)
  .then(name => {
   res
    .send(name)
  })
  .catch(() => {
   res
    .status(500)
    .json({message: "Error editing user."})
  })
 }
 
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