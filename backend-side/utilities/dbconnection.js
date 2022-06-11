const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectionEstablish = async ()=>{
    try{
        await mongoose.connect(process.env.db_connect_mongo,()=>{
            console.log("Database successfuly connected")
        })
    }catch(error){
        console.log("Dataabase failure :" ,error.message);
    }
}
module.exports = connectionEstablish;