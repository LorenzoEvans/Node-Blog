const upperCaser = (req, res, next) => {
 // const upperName = req.body.upperName
  if(req.body){
   const upperName = req.body.name[0].toUpperCase() + req.body.slice(1)
   req.body.name = upperName
  next()
 }
}

module.exports = {
 upperCaser: upperCaser
}