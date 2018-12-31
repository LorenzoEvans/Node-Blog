const upperCaser = (req, res, next) => {
 const name = req.body.name
 if (name) {
  name = name.toUppercase()
  req.body.name = name
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