const updateViews = () => {
  const vc = document.getElementById("vCounter")
  const stream = "stream"+viewingNow.stream
  const text = `Viewers: ${viewDB[stream]}`
  vc.innerText = text
}