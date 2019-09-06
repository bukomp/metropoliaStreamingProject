const jsonDB = require('node-json-db').JsonDB
const configDB = require('node-json-db/dist/lib/JsonDBConfig').Config
console.log(jsonDB);
const db = new jsonDB(new configDB("db/viewDB", true, true, '/'));

db.push('/stream1', 0);
db.push('/stream2', 0);
db.push('/stream3', 0);
console.log(db.getData("/"));

module.exports = db
