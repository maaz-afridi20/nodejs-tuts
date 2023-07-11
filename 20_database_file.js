// INSTALLING THE DATABASE {MONGO DB}

// THROUGH {MONGOSH} IT IS THE TERMINAL LIKE THING GOR MONGO DB

// these are all the commands for using inside the mongo db terminal.

// FOR CREATING => USE
// FOR SHOWING COLLECTION = DB.SHOWCOLLECTION

// CRUD IN MONDO DB

// INSERTING SOME DATA

// when you are inside db write
// from mondo db terminal
//
// db.pruducts.insertOne({name:'electronics',brand:'smmsung',price:'6789'})
// the products is the name of the collection
//
//db.createCollection('products') this will create collectino

// UPDATING THE DATA (MODIFYING THE DATA)

// this is how you can modifiy the data inside the collection
//
// db.products.updateOne({brand:'hp'},{$set:{brand:'harrypotter'}})

// the prodcts is the name of the collectgion


// FETCHING THE DATA


// db.products.find() this will give you all the things in the product collection 



// FOR DELETING THE DATA

// db.products.deleteOne({brand:"harrypotter"})  brand is the key and its value is harrpoeter
// we have to delete it so.. we give. the.