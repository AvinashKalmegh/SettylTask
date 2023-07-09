const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email: {type:String, require:true},
    password: {type:String, require:true}
})


const AuthModel = new mongoose.model("auth",authSchema);

module.exports = AuthModel;