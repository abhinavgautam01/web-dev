const { Router } = require("express")
const { AdminModel, CourseModel } = require("../db")
const adminRouter = Router()
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")
const bcrypt = require("bcrypt")
const { z } = require("zod")
const { adminMiddleware } = require("../middleware/admin")
adminRouter.post("/signup", async (req, res)=>{
     const data = z.object({
        email: z.email(),
        password: z.string().min(3).max(8),
        firstname: z.string(),
        lastname: z.string()
    })

    const parseData = data.safeParse(req.body)

    if(parseData.success){
        const hashedPassword = await bcrypt.hash(parseData.data.password, 5);
        await AdminModel.create({
            email: parseData.data.email,
            password: hashedPassword,
            firstname: parseData.data.firstname,
            lastname: parseData.data.lastname,
        })
        res.json({
            message: "Admin Signed up"
        })
    }else (
        res.json({
            message: "Invalid Arguments",
            error: parseData.error
        })
    )
})
adminRouter.post("/signin", async (req, res)=>{
    const data = z.object({
        email: z.email(),
        password: z.string().min(3).max(8)
    })

    const parseData = data.safeParse(req.body)
    if(parseData.success){
        const admin = await AdminModel.findOne({
            email: parseData.data.email,
        })
        if(admin){
            const password = admin.password
            const hashedPassword = await bcrypt.compare(parseData.data.password, password)
            if(hashedPassword){
                const token = jwt.sign({
                    adminId: admin._id
                }, JWT_ADMIN_PASSWORD)
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
                message: "Invalid Admin Credentials"
            })
        }

    }else {
        res.status(403).json({
            message: "Invalid Data...",
            error: parseData.error
        })
    }
})
adminRouter.post("/course", adminMiddleware, async (req, res)=>{
    const adminId = req.adminId;
    const { title, description, price, imageURL } = req.body

    const course = await CourseModel.create({
        title: title,
        description: description,
        price: price,
        imageURL: imageURL,
        creatorId: adminId
    })

    res.json({
        message: "Course Created Successfully",
        courseId: course._id
    })
})
adminRouter.put("/course", (req, res)=>{

})
adminRouter.get("/course/bulk", (req, res)=>{

})

module.exports = {
    adminRouter: adminRouter
}