const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
  description: { type: String, required: true },
  due_date: { type: String, required: true },
  status: { type: String, required: true },
  assigned_user: { type: String, required: true },
  userId: String ,
})


const TaskModel = new mongoose.model("task",taskSchema);


module.exports = TaskModel;