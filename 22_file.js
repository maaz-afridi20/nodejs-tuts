const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function dbConnections() {
  let result = await client.connect();
  db = result.db("e-comm");
  return db.collection("products");
}

// dbConnections().then((resp) => {
//   resp
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

//
//
//

// this below is modern method use this.method. for future controll..

const mainn = async () => {
  let data = await dbConnections();
  data = await data.find({}).toArray();
  console.log(data);
};
mainn();
