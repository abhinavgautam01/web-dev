import express from "express"
declare global {
    namespace Express {
        export interface Request {
            user_id?: string
        }
    }
}

import { ContentModel, UserModel } from "./db.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { userMiddleware } from "./middleware.js";
dotenv.config()
const app = express()
app.use(express.json())
app.post("/api/v1/signup", async (req, res)=>{

    // todo: zod Validation, hash password

    const username = req.body.username;
    const password = req.body.password;

    try{
        const user = await UserModel.find({
            username: username
        })
        if(!user){
            await UserModel.create({
                username: username,
                password: password
            })
        
            res.status(200).json({
                message: "User SignedUp Successfully"
            })
            
        }
        else {
            res.status(401).json({
                message: "User already exist."
            })
        }
    } catch(e) {
        res.status(403).json({
            message: "User already exist"
        })
    }
})
app.post("/api/v1/signin", async(req, res)=>{
const username = req.body.username
    const password = req.body.password

    const user = await UserModel.findOne({
        username: username,
        password: password
    })
    if(user){
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET!)

        res.json({
            token: token
        })
    }else {
        res.status(403).json({
            message: "Invalid Username or password..!"
        })
    }
  
})
app.post("/api/v1/content", userMiddleware, async(req, res)=>{
    const link = req.body.link
    const type = req.body.type
    const title = req.body.title

    try {
        await ContentModel.create({
            link: link,
            type: type,
            title: title,
            tags: [],
            user_id: req.user_id
        })
        res.json({
            message: "Content Created successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Content not Created..!"
        })
    }

})
app.get("/api/v1/content", userMiddleware, async(req, res)=>{
    const user_id = req.user_id
    try{
        const content = await ContentModel.find({
            user_id: user_id
        }).populate("user_id", "username");

        console.log("log2: ", content)
        if(content.length > 0){
            res.json({
                content: content
            })
        }else {
            res.json({
                message: "No content here"
            })
        }
    }catch (e){
        console.error("find/populate error: ", e)
        res.status(404).json({
            message: "Something went wrong..."
        })
    }


})
app.delete("/api/v1/content", userMiddleware, async(req, res)=>{
    const content_id = req.body.content_id
    
    try{
        await ContentModel.deleteOne({
            _id: content_id,
            user_id: req.user_id
        })
        res.json({
            message: "Content Deleted Succesfully"
        })
    }catch(e) {
        res.json({
            message:"Deletion operation failed"
        })
    }
})
app.post("/api/v1/brain/share", (req, res)=>{

})
app.get("/api/v1/brain/:shareLink", (req, res)=>{

})

app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})