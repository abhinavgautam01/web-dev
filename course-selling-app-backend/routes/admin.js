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

    if(!course){
        return res.status(403).json({
            message: "Course Creation Failed..!"
        })
    }

    res.json({
        message: "Course Created Successfully",
        courseId: course._id
    })
})
adminRouter.put("/course", adminMiddleware, async (req, res)=>{
    const adminId = req.adminId;
    const { title, description, price, imageURL, courseId } = req.body

    try{
        const course = await CourseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        }, {
            title: title,
            description: description,
            price: price,
            imageURL :imageURL
        })

        if (course.matchedCount === 0) {
            return res.status(403).json({
                message: "You are not allowed to update another admin's course",
            });
        }

        if (course.modifiedCount === 0) {
            return res.status(400).json({
                message: "No changes made or course not found",
            });
        }
      
        res.json({
            message: "Course Updated",
            courseId: course._id
        })
    }
    catch(e){
        res.json({
            message: "Coudn't update other admin's Course"
        })
    }
})
adminRouter.get("/course/bulk", adminMiddleware, async (req, res)=>{
    const adminId = req.adminId;
    const courses = await CourseModel.find({
        creatorId: adminId
    })
    
    res.json({
        courses: courses
    })
    
})

module.exports = {
    adminRouter: adminRouter
}