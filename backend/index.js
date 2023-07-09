const express = require("express");
const main = require("./configs/db");
const taskRouter = require("./routes/task");
const authRouter = require("./routes/auth")
const authentication = require("./middleware/authentication")

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Task Management App")
})

app.use("/auth",authRouter);
app.use(authentication);
app.use("/tasks", taskRouter);


app.listen(8008,()=>{
    main();
    console.log("running on port 8008");
})