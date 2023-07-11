const dbConnectt = require("./mongodb");

const deleteDataFromDb = async () => {
  let data = await dbConnectt();
  let result = await data.deleteMany({
    // this will delete honda 125 from db.
    name: "honda 125",
  });
  if (result.acknowledge) {
    console.log("record deleted");
  } else {
    console.log("some error");
  }
  console.log(result);
};
deleteDataFromDb();
