const db = require('../utility/jsonDb')

const toJSON = async (message) => {

  const data = await db.getData(`/`)

  const rData = JSON.stringify({
    views: data,
    message: "Views has changed, please update 'views counter'" || message
  })
  return rData;
}

const getHValue = (o, n) => {
  let keys = Object.keys(o);
  keys.sort(function(a,b){
    return o[b] - o[a];
  })
  console.log(keys);
  return keys.slice(0,n);
}

const initConnect = () => {

  const viewsNow = db.getData('/')
  console.log(viewsNow, "I am here")
  const mostViews = getHValue(viewsNow, 1)[0];

  const data = JSON.stringify({
    views:viewsNow,
    mostViews:mostViews,
    message: "Connection successfully established"
  })

  return data;
}

const initView = (data) => {

  const views = db.getData(`/stream${data.stream}`)
  db.push(`/stream${data.stream}`, views + 1)

  return toJSON("this was initial connection, you have been added to viewer count")
}

const view = (data) => {

  const views = db.getData(`/stream${data.stream}`)
  db.push(`/stream${data.stream.last}`, views - 1)
  db.push(`/stream${data.stream.new}`, views + 1)

  return toJSON()
}

const viewClose = (data) => {

  const views = db.getData(`/stream${data.stream}`)
  db.push(`/stream${data.stream}`, views - 1)

  return toJSON()
}

module.exports = {
  initConnect,
  view,
  viewClose,
  initView
}
