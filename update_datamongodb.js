const dbConnectt = require("./mongodb");



// UPDATING ONLY ONE DATA.
// const updateData = async () => {
//   let data = await dbConnectt();

//   let result = await data.updateOne(
//     { name: "ali" },
//     { $set: { name: "S1 Pro" } } // this mean that set or change the
//     // name of ali to s1 pro.
//   );

//   if (result.acknowledged) {
//     console.log("data updated success");
//   } else {
//     console.log("error in updating");
//   }
// };
// updateData();


// UPADTING MORE THAN ONE DATA.

const updateDataMany=async()=>{
    let data = await dbConnectt();
    let resultt = await data.updateMany(
        {name:'S1 Pro'},{ $set:{price:'41,000'} },
    );
    if(resultt.acknowledged){
        console.log('data updated successfully');
    }else{
        throw 'some error';
    }
}
updateDataMany();
