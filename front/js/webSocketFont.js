//configure address and port Web Socket to connect
const ws = new WebSocket("ws://localhost:3001/");


/* send message structure
  {
    message: "",
    stream: integer or {new: integer, old: integer},
    init: boolean
  }
 */

/* receive message structure
  {
    message: ""
    views: { ...streamName: int},
    mostViews: "",
  }
*/


ws.onopen = (evt) => {
  // Web Socket is connected
  ws.send(JSON.stringify({message:"I am connected, please be gentle, sempai OwO"}));
};

ws.onmessage = (evt) => {
  // When Web Socket receives message
  console.log(evt.data);
  const data = JSON.parse(evt.data)
  viewsNow = data.views
  mostViewed = data.mostViews
  console.log(data);
};

ws.onclose = (evt) => {
  console.log(evt);
  // websocket is closed.
};