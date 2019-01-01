const upperCaser = (req, res, next) => {
 const upperName = req.body.upperName
  req.body.upperName = upperName.charAt(0).toUpperCase()
  next()
}

module.exports = {
 upperCaser: upperCaser
}