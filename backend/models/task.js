const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    due_date:Number,
    status:Boolean,
    assigned_user:String
})


const TaskModel = new mongoose.model("task",taskSchema);


module.exports = TaskModel;