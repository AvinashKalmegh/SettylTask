const {Router} = require("express");
const TaskModel = require("../models/task");

const taskRouter = Router();


taskRouter.get("/",async(req,res)=>{
        try {
            const data = await TaskModel.find();
            res.send({"Data": data})
        } catch (error) {
            res.status(400).send("There is something wrong");
        }
})



taskRouter.post("/add",async(req,res)=>{
    try {
        const taskData = TaskModel(req.body);
        await taskData.save();
        res.send({"result": "Data posted successfully", "Task":taskData})
    } catch (error) {
        res.status(400).send("There is something wrong");
        
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