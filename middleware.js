const upperCaser = (req, res, next) => {
 const name = req.body.user
 if (name) {
  req.body.name = name.toUppercase()
  res
   .send(name)
 }
 else {
  res
   .status(500)
   json({error: "There was an error changing name to uppercase."})
 }
}

module.exports = {
 upperCaser: upperCaser
}