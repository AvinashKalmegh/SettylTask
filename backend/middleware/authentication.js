const jwt = require("jsonwebtoken");
require("dotenv").config();


const authentication = (req,res,next)=>{
   const token = req.headers.authorization;
    // console.log(token);
   if(token){
    const decoded = jwt.verify(token,process.env.KEY);
        if(decoded){
            req.body.userId = decoded.userId;
            next();
        }
        else{
            res.status(400).send({"result":"Please login first"})
        }
   }
   else{
    res.status(400).send({"result":"Please login first"})

   }
}

module.exports = authentication;