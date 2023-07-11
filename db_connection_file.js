

const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);


const connectionClass =async()=>{
    let result = await client.connect();
    let db =result.db("e-comm");
    return db.collection('products');
}


// const dbccc=async()=>{
//     let data = await connectionClass();
//     data = await data.find({}).toArray();
//     console.log(data);
// }

// dbccc();

module.exports = connectionClass;