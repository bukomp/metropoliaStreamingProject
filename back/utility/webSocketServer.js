const app = require('../app')
const http = require('http');
const webSocket = require('ws')

const db = require('./jsonDb')

const Server = http.createServer(app);
const wss = new webSocket.Server({ server:Server });


wss.on('connection', ws => {
  console.log(db.getData('/'));

  ws.send(JSON.stringify(db.getData('/')))

  ws.on('message', async message => {
    const mObj = JSON.parse(message)

    if(mObj.form === "view"){
      console.log(mObj);
      const nowViews =  await db.getData(`/stream${mObj.stream}`);
      await db.push(`/stream${mObj.stream}`, nowViews + 1)
    }
    ws.send(JSON.stringify(db.getData('/')))
  })

})


module.exports = {
  wss,
  Server
}