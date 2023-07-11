const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"; // this is the url through which this is the url of local host.
// the mongo db will connect.

const client = new MongoClient(url); // the client variable may be any variable.

async function getDataFromEcom() {
  let result = await client.connect(); // this is for connection
  let db = result.db("e-comm"); // ye {db} hm nay apni marzi say variable mein liya hai
  // ye jo b name rkna chahein tu kr sktay hain
  // ya agaar na b krna chahay tu koii msla nai..
  let myCollections = db.collection("products");
  let dbResponse = await myCollections.find({}).toArray();
  console.log(dbResponse);
}

getDataFromEcom();

//
//
//    THIS IS COMMING FROM YOUTUDATABASE WHICH IS CREATED BY ME.
//
//
// async function getDataFromYoutube() {
   
//   let secondResult = await client.connect();
//   let database = secondResult.db("youtube");
//   const collectionName = database.collection("live");
//   let mydbResponse = await collectionName.find({}).toArray();
//   console.log(mydbResponse);
// }

// getDataFromYoutube();

