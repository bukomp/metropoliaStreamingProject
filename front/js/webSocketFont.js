
//configure address and port Web Socket to connect
const ws = new WebSocket("ws://localhost:3001/");

ws.onopen = () => {
  // Web Socket is connected
  //ws.send("Message to send");
};

ws.onmessage = (evt) => {
  // When Web Socket receives message
  /*const data = JSON.parse(evt.data)
  data["stream1"]++
  console.log(data["stream1"])
*/
  //console.log(evt.data);
};

ws.onclose = (evt) => {
  console.log(evt);
  // websocket is closed.
};