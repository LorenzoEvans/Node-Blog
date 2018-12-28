const upperCaser = (req, res, next) => {
 const name = req.body.user
 if (name) {
  req.body.name = name.toUppercase()
  next()
 }
 else {
   res
   .json({error: "There was an error changing name to uppercase."})
 }
}

module.exports = {
 upperCaser: upperCaser
}