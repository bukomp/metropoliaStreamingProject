const app = require('../app')
const http = require('http');
const webSocket = require('ws')

const server = http.createServer(app);
const wss = new webSocket.Server({ server });

wss.on('connection', (ws) => {

  ws.on('message', (message) => {
    console.log('received: %s', message);
    ws.send(`Hello World!?`);
    ws.close()
  });

  ws.send('Hi there, I am a WebSocket server');

});

module.exports = server