const express = require("express")
const helmet = require("helmet")
const morganLog = require("morgan")
const PORT = 4090
const userRouter = require('./Routers/userRouters')
const postRouter = require("./Routers/postRouters")
const server = express()

server.use(
 express.json(),
 helmet(),
 morganLog('tiny'),
)

server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)

server.listen(PORT, () => {
 console.log(`Server running live on port ${PORT}`)
})