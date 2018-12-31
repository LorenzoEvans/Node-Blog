const upperCaser = (req, res, next) => {
 const upperName = req.params.name.toUppercase()
  req.name = upperName
  next()
}

module.exports = {
 upperCaser: upperCaser
}