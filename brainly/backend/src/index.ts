import express from "express"
import { UserModel } from "./db.js";
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())
app.post("/api/v1/signup", async (req, res)=>{

    // todo: zod Validation, hash password

    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
            username: username,
            password: password
        })
    
        res.status(200).json({
            message: "User SignedUp Successfully"
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exist"
        })
    }
})
app.post("/api/v1/signin", (req, res)=>{
    
})
app.post("/api/v1/content", (req, res)=>{

})
app.get("/api/v1/content", (req, res)=>{

})
app.delete("/api/v1/content", (req, res)=>{

})
app.post("/api/v1/brain/share", (req, res)=>{

})
app.get("/api/v1/brain/:shareLink", (req, res)=>{

})

app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})