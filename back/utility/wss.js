const app = require('../app')
const http = require('http');
const webSocket = require('ws')

const Server = http.createServer(app);
const wss = new webSocket.Server({ server:Server });

const wsCC = require('../components/ws')

wss.on('connection', ws => {
  ws.send(wsCC.initConnect())
  console.log("\n",'Sempai, I connected, fill me with data RAWR :"3');
  ws.on('message', async m => {
    const message = JSON.parse(m);
    console.log("\n",message);
    if(!message.init) {
      const response = await wsCC.initView(message)
      ws.send(response)
    } else if (message.init && message.close){
      const response = await wsCC.viewClose(message)
      ws.send(response)
    } else {
      const response = await wsCC.view(message)
      ws.send(response)
    }
    wsCC.printDB()
  })

  ws.on('close', async () => {
    console.log("\nConnection Closed");
    wsCC.printDB()
  })
})

module.exports = {
  wss,
  Server
}

