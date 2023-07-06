const mongoose = require("mongoose");
require("dotenv").config();

const main = async()=>{
    const connect = await mongoose.connect(process.env.MONGO);
    console.log("Connected to db");
}


module.exports = main;