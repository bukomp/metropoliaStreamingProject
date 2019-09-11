function vaihto() {
const x = document.getElementById("select").value;
if (x === "playerElement1") {
  viewsNow.stream = 1;
  viewsNow.name = "vtStream"
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

}

function vastaus(){
 let vastaus = {
   message: "",
   stream: integer or {new: integer, old: integer},
   init: boolean
 }
}