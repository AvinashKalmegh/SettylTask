const { Router } = require("express");
const AuthModel = require("../models/auth");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const authRouter = Router();


authRouter.post("/register", async (req, res) => {
    try {
        const payload = req.body;
        const authData = await AuthModel.findOne({ email: payload.email });

        if (authData) {
            res.send({ "result": "User already exists, Please login !!!" });
        }
        else {
            const passwordHash = await bcrypt.hashSync(payload.password, 8);
            payload.password = passwordHash;

            const newUser = AuthModel(payload);
            await newUser.save();

            res.send({ "Result": "User registered successfully" });

        }
    } catch (error) {
        res.status(404).send({ "Message": "Something is wrong" })
    }
})


authRouter.post("/login", async (req, res) => {
    try {
        const payload = req.body;
        const authData = await AuthModel.findOne({ email: payload.email });
        if (!authData) {
            res.send({ "result": "Please register first!" })
        }

        const correctPass = await bcrypt.compareSync(
            payload.password,
            authData.password
        )  

        if (correctPass) {
            const token = await jwt.sign({ email: authData.email, userId: authData._id }, process.env.KEY);
            res.status(200).send({ "result": "Login successful", token })
        }
        else {
            res.status(404).send({ "result": "Wrong Credentials" })
        }

    } catch (error) {
        res.status(404).send({ "Message": "Something is wrong" })
    }
})





module.exports = authRouter;