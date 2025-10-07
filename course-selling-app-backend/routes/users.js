const { Router } = require("express")
const { z } = require("zod")
const userRouter = Router()
const bcrypt = require("bcrypt")
const { UserModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")

userRouter.post("/signup", async (req, res)=>{
    const data = z.object({
        email: z.email(),
        password: z.string().min(3).max(8),
        firstname: z.string(),
        lastname: z.string()
    })

    const parseData = data.safeParse(req.body)

    if(parseData.success){
        const hashedPassword = await bcrypt.hash(parseData.data.password, 5);
        await UserModel.create({
            email: parseData.data.email,
            password: hashedPassword,
            firstname: parseData.data.firstname,
            lastname: parseData.data.lastname,
        })
        res.json({
            message: "User Signed up"
        })
    }else (
        res.json({
            message: "Invalid Arguments",
            error: parseData.error
        })
    )
    
})
userRouter.post("/signin", async (req, res)=>{
    const data = z.object({
        email: z.email(),
        password: z.string().min(3).max(8)
    })

    const parseData = data.safeParse(req.body)
    if(parseData.success){
        const user = await UserModel.findOne({
            email: parseData.data.email,
        })
        if(user){
            const password = user.password;
            const hashedPassword = await bcrypt.compare(parseData.data.password, password)
            if(hashedPassword){
                const token = jwt.sign({
                    userId: user._id
                }, JWT_USER_PASSWORD)
                res.json({
                    token: token
                })       
            }else {
                res.status(403).json({
                    message: "Wrong password"
                })
            }
        }else {
            res.status(403).json({
                message: "Invalid User Credentials"
            })
        }

    }else {
        res.status(403).json({
            message: "Invalid Data...",
            error: parseData.error
        })
    }
})

module.exports = {
    userRouter: userRouter
}