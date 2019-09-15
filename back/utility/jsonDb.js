const jsonDB = require('node-json-db').JsonDB
const configDB = require('node-json-db/dist/lib/JsonDBConfig').Config
const db = new jsonDB(new configDB("db/viewDB", true, true, '/'));

db.push('/stream1', 0);
db.push('/stream2', 0);
db.push('/stream3', 0);
db.push('/stream4', 0);


const printDB = () => {
  console.log("\n++++++ data base ++++++")
  console.log(db.getData("/"));
  console.log("+++++++++++++++++++++++\n")
}

module.exports = {
  db,
  printDB
}
