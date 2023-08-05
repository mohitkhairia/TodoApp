const mongoose = require('mongoose');


// const mongo = String(process.env.MongoDbAdress)

async function connect(){
    try{
        const conn = await mongoose.connect('mongodb+srv://todoApp:todoApp@cluster0.wfslrr4.mongodb.net/Todo?appName=mongosh+1.10.3')
        // mongodb+srv://<credentials>@cluster0.td7qnop.mongodb.net/?appName=mongosh+1.9.1
        console.log("Connected")
    }
   catch(err){
    console.error("Could not connect to the database")
   }
   
    
}

module.exports= connect;