//configure address and port Web Socket to connect
const ws = new WebSocket("ws://localhost:3001/");


/* send message structure
  {
    message: "",
    stream: integer or {new: integer, old: integer},
    init: boolean
    close: boolean
  }
 */

/* receive message structure
  {
    message: ""
    views: { ...streamName: int},
    mostViews: "",
  }
*/

const jsonBuilder = (message, stream, init, close) => {
  return JSON.stringify({
    message,
    stream,
    init,
    close
  })
}

const initConnection = (message, stream, init, close) => {
  ws.send(jsonBuilder(message, stream, init, close))
  viewingNow.init = true
  updateViews()
}

ws.onopen = () => {
  // Web Socket is connected
  console.log("socket is open");
  initConnection("I opened first stream", 1, false, false)
  //ws.send(jsonBuilder('Sempai, I connected, fill me with data RAWR :"3', 1, true, false));
};

ws.onmessage = (evt) => {
  // When Web Socket receives message
  const data = JSON.parse(evt.data)
  console.log(data);
  console.log(data.message);
  viewDB = data.views
  if(data.mostViews)mostViewed = data.mostViews;
  updateViews()
};

ws.onclose = (evt) => {
  console.log(evt);
  // websocket is closed.
};

window.addEventListener("unload", () => {
  if(viewingNow.init)ws.send(jsonBuilder("Sorry sempai, we can't be together anymore", viewingNow.stream, viewingNow.init, true))
})