import express from "express"
declare global {
    namespace Express {
        export interface Request {
            user_id?: string
        }
    }
}

import { ContentModel, LinksModel, UserModel } from "./db.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";
dotenv.config()
const app = express()
app.use(express.json())
app.post("/api/v1/signup", async (req, res)=>{

    // todo: zod Validation, hash password

    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password){
        res.status(411).json({
            message: "Invalid Username or Password"
        })
        return 
    }
    try{
        const user = await UserModel.findOne({
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
            message: "Something went wrong"
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
app.post("/api/v1/brain/share", userMiddleware, async(req, res)=>{
    const share = req.body.share

    if(share){
        try {
            const existingLink = await LinksModel.findOne({
                user_id: req.user_id
            })
            if(existingLink){
                res.status(200).json({
                    link: `/api/v1/brain/${existingLink.hash}`
                })
                return
            }
        } catch (error) {
            res.status(411).json({
                message: "Internal server error"
            })
        }
        try {
            let hash = random(10)
            const link = await LinksModel.create({
                user_id: req.user_id,
                hash: hash
            })
            res.status(200).json({
                link: `/api/v1/brain/${hash}`,
                message: "Shareable link created successfully"
            })
        } catch (error) {
            res.status(400).json({
                message: "Coudn't create shareable link..."
            })
        }
    }else{
        try {
            await LinksModel.deleteOne({
                user_id: req.user_id
            })
            res.status(200).json({
                message: "Shareable link deleted successfully"
            })
        } catch (error) {
            res.status(400).json({
                message: "Coudn't delete shareable link..."
            })
        }
    }
})
app.get("/api/v1/brain/share/:shareLink", async (req, res)=>{
    const hash = req.params.shareLink
    const link = await LinksModel.findOne({
        hash: hash
    })
    if(!link){
        res.status(400).json({
            message: "No shareable link found"
        })
        return
    }

    const content = await ContentModel.find({
        user_id: link.user_id
    })

    const user = await UserModel.findOne({
        _id: link.user_id
    })

    if(!user){
        res.status(404).json({
            message: "User not found"
        })
        return
    }

    res.status(200).json({
        username: user.username,
        content: content
    })
})

app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})