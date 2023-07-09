const {Router} = require("express");
const TaskModel = require("../models/task");
const AuthModel = require("../models/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const taskRouter = Router();


taskRouter.get("/",async(req,res)=>{
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.KEY);
        try {
            if(decoded){
                const data = await TaskModel.find({userId: decoded.userId});
                res.send({"Data": data})

            }
        } catch (error) {
            res.status(400).send(error.message);
        }
})



taskRouter.post("/add",async(req,res)=>{
    try {

    //   const authData = AuthModel.find({email:"avi@gmail.com"})
    //   console.log(authData);

        const taskData = TaskModel(req.body);
        await taskData.save();
        res.send({"result": "Data posted successfully", "Task":taskData})
    } catch (error) {
        res.status(400).send(error.message);
        
    }
})


taskRouter.patch("/update/:id", async(req,res)=>{
    try {
       const taskData = await TaskModel.findByIdAndUpdate((_id=req.params.id),req.body);
       await taskData.save();
       res.send({"result": "Data updated successfully","Data" : taskData})
    } catch (error) {
        res.status(400).send("There is something wrong");
        
    }
})


taskRouter.delete("/delete/:id", async(req,res)=>{
    try {
        await TaskModel.findByIdAndDelete({_id:req.params.id});
        res.send({"result": "Data deleted successfully"})
     } catch (error) {
         res.status(400).send("There is something wrong");
         
     }
})

module.exports = taskRouter;