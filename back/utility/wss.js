const app = require('../app')
const http = require('http');
const webSocket = require('ws')

const Server = http.createServer(app);
const wss = new webSocket.Server({ server:Server });
const wsList = []
const wsCC = require('../components/ws')

wss.on('connection', ws => {
  wsList.push(ws)
  wsList.forEach(ws => {ws.send(wsCC.initConnect())})
  console.log("\n",'Sempai, I connected, fill me with data RAWR :"3');
  ws.on('message', async m => {
    const message = JSON.parse(m);
    console.log("\n",message);
    if(!message.init) {
      const response = await wsCC.initView(message)
      wsList.forEach(ws => {ws.send(response)})
    } else if (message.init && message.close){
      console.log("\n+++++ closing connection +++++")
      const response = await wsCC.viewClose(message)
      wsList.forEach(ws => {ws.send(response)})
    } else {
      const response = await wsCC.view(message)
      wsList.forEach(ws => {ws.send(response)})
    }
    wsCC.printDB()
  })

  ws.on('close', async () => {
    wsCC.printDB()
    console.log("\nConnection Closed");

  })
})

module.exports = {
  wss,
  Server
}

