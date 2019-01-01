const express = require("express")

const router = express.Router()

const postDB = require('../data/helpers/postDb')

router.get('/', (req, res) => {
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

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
 const { id } = req.params
if (id) {
 postDB
  .update(id, user)
  .then(() => {
   res
    .send(user)
  })
  .catch(() => {
   res
    .json({error: "There was an error updating post."})
  })
}
})

router.delete('/:id', (req, res) => {
 postDB.remove(id)
 .then(() => {
  res
  .json({message: "Post was removed from the database."})
 })
 .catch(() => {

 })
})

module.exports = router