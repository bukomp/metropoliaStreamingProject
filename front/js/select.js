function vaihto() {
const x = document.getElementById("select").value;
if (x === "playerElement1") {
  viewsNow.stream = 1;
  viewsNow.name = "vtStream"
}else if (x === "playerElement2"){
  console.log("2")
}else if (x === "playerElement3"){
  console.log("3")
}else if (x === "playerElement4"){
  console.log("4")
}else {
  console.log("not working");
  console.log(x);
}

}

