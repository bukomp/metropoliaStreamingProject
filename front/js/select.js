/*function vaihto() {
const x = document.getElementById("select").value;
x.addEventListener("change", (e) => {
  console.log(e);
})
if (x === "playerElement1") {
  viewsNow.stream = 1;
  viewsNow.name = "vtStream"
  console.log(viewsNow)
}else if (x === "playerElement2"){
  viewsNow.stream = 2;
  viewsNow.name = "testi"
}else if (x === "playerElement3"){
  viewsNow.stream = 3;
  viewsNow.name = ""
}else if (x === "playerElement4"){
  viewsNow.stream = 4;
  viewsNow.name = ""
}else {
  console.log("not working");
  console.log(x);
}

}*/
/*
function vastaus(){
 let vastaus = {
   message: "",
   stream: integer or {new: integer, old: integer},
   init: boolean
 }
}
*/

const sendWS = (newStream, oldStream) => { //stream numbers should start from 1
  const data2send = {
    message: "I just changed slides, OwO",
    stream: { new: newStream, old: oldStream },
    init: viewingNow.init,
    close: false
  }

  ws.send(JSON.stringify(data2send))
}

const stream1 = document.getElementById("stream1")
const stream2 = document.getElementById("stream2")
const stream3 = document.getElementById("stream3")
const stream4 = document.getElementById("stream4")


stream1.addEventListener("click", () => {
  alert("click")

  //logic that changes viewers streams

  //sendWS(new, old)
})
stream2.addEventListener("click", () => {
  alert("click")

  //logic that changes viewers streams

  //sendWS(new, old)
})
stream3.addEventListener("click", () => {
  alert("click")

  //logic that changes viewers streams

  //sendWS(new, old)
})
stream4.addEventListener("click", () => {
  alert("click")

  //logic that changes viewers streams

  //sendWS(new, old)
})