const app = require('../app')
const http = require('http');
const webSocket = require('ws')

const Server = http.createServer(app);
const wss = new webSocket.Server({ server:Server });

const wsCC = require('../components/ws')

wss.on('connection', async ws => {
  ws.send(wsCC.initConnect())

  ws.on('message', async m => {
    const message = JSON.parse(m);
    console.log(message);
    if(message.init) {
      const response = wsCC.view(message)
      ws.send(response)
    }
  })

})

module.exports = {
  wss,
  Server
}

