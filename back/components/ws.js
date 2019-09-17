const db = require('../utility/jsonDb').db
const printDB = require('../utility/jsonDb').printDB

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

  return toJSON()
}

const view = (data) => {

  if(data.stream.new <= 4) {
    const New = db.getData(`/stream${data.stream.new}`)
    db.push(`/stream${data.stream.new}`, New + 1)
  }

  if(data.stream.old <= 4) {
    const Old = db.getData(`/stream${data.stream.old}`)
    db.push(`/stream${data.stream.old}`, Old - 1)
  }

  return toJSON()
}

const viewClose = (data) => {
  if(data.stream <= 4) {
    const views = db.getData(`/stream${data.stream}`)
    db.push(`/stream${data.stream}`, views - 1)
  }

  return toJSON()
}

module.exports = {
  initConnect,
  view,
  viewClose,
  initView,
  printDB,
  toJSON
}
