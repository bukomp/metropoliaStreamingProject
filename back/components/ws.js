const db = require('../utility/jsonDb')

const getHValue = (o, n) => {
  var keys = Object.keys(o);
  keys.sort(function(a,b){
    return o[b] - o[a];
  })
  console.log(keys);
  return keys.slice(0,n);
}

const initConnect = () => {

  const viewsNow = db.getData('/')
  const mostViews = getHValue(viewsNow, 1)[0];

  const data = JSON.stringify({
    views:viewsNow,
    mostViews:mostViews,
    message: "Connection successfully established"
  })

  return data;
}

const view = async (data) => {
  const views = await db.getData(`/stream${data.stream}`)
  if (data.init) await db.push(`/stream${data.stream}`, views + 1)
  else {
    await db.push(`/stream${data.stream.last}`, views - 1)
    await db.push(`/stream${data.stream.new}`, views + 1)
  }
  const viewsNow = await db.getData(`/stream${data.stream}`)

  const rData = JSON.stringify({
    views: viewsNow,
    message: "Successfully switched"
  })
  return rData;
}

const close = async () => {
  return
}

module.exports = {
  initConnect,
  view
}
