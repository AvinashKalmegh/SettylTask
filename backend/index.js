const express = require("express");
const main = require("./configs/db");
const taskRouter = require("./routes/task");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Task Management App")
})

app.use("/tasks", taskRouter);


app.listen(8008,()=>{
    main();
    console.log("running on port 8008");
})