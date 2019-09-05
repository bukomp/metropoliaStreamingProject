
window.onload = () => {
  const ws = new WebSocket("ws://localhost:3001/");

  ws.onopen = () => {
    // Web Socket is connected
    ws.send("Message to send");
  };

  ws.onmessage = (evt) => {
    // When Web Socket receives message
    console.log(evt.data);
  };

  ws.onclose = (evt) => {
    console.log(evt);
    // websocket is closed.
  };
}
