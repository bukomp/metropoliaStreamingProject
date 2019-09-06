const app = require('../app')
const http = require('http');
const webSocket = require('ws')

const db = require('./jsonDb')

const Server = http.createServer(app);
const wss = new webSocket.Server({ server:Server });
wss.on('connection', ws => {
  console.log(db.getData('/'));


  ws.send(JSON.stringify(db.getData('/')))

  ws.on('message', message => {
    console.log(message)
  })

})


module.exports = {
  wss,
  Server
}