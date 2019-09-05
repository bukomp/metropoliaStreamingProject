const server = require('./utility/webSock')

const PORT = 3001
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})