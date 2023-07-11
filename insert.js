// const dbConnect = require('./db_connection_file'); // this is just importing the file
// // that we have made.

// const insertt =async()=>{
//     const db = await dbConnect();

//     const resultt = db.insert({
//         name:'note5',
//         brand :'vivo',
//         prince:'320',
//         category:'mobile'
//     })
// }

// insertt();

// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1:27017";

// const client = new MongoClient(url);

// THIS IS FETCHING DATA FROM DB
// const addingToDb = async () => {
//   const result = await client.connect();
//   const db = result.db("e-comm");
//   const mycolll = db.collection("products");
//   const dbrespp = await mycolll.find({}).toArray();
//   console.log(dbrespp);
// };

// addingToDb();

//
// INSERTING SOME DATA INTO MONGO DB
//
// below this wil add data to my youtube db with the collection name {videos}
// we use insertMany for inserting more than one. data.

// const insertingToDb = async () => {
//   const result = await client.connect();
//   const dbs = result.db("youtube");
//   const insertingCollec = dbs.collection("videos");
//   const dbrespp = await insertingCollec.insertMany(
//     [
//     {   title: "toue videos",
//         duration: "20:00",
//         category: "fun",
//         viewsCount: "1M",
//         subscribers: "13M",
//     },
//     {
//         title: "wrestling videos",
//     duration: "50:00",
//     category: "fighting",
//     viewsCount: "18M",
//     subscribers: "3M",
// },
//     ],
//   );
//   if (dbrespp.acknowledged) {
//     console.log('data inserted successfully');
//   }else{
//     throw 'error while inserting';
//   };
// };
// insertingToDb();

const dbConnectt = require("./mongodb");

const insertingToDb = async () => {
  let data = await dbConnectt();
  let result = await data.insertMany([
    {
      name: "electronics",
      brand: "nokia",
      price: "234",
      category: "mobiles",
    },
    {
      name: "bmw",
      brand: "BMW",
      price: "682394$",
      category: "cars",
    },
    {
      name: "bugati",
      brand: "bugatti",
      price: "682394$",
      category: "cars",
    },
    {
      name: "honda 125",
      brand: "honda",
      price: "220K",
      category: "bikes",
    },
  ]);
  if (result.acknowledge) {
    console.log("data added successfully");
  } else {
    console.log("some error");
  }
};

insertingToDb();
