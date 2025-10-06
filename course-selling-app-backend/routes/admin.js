const { Router } = require("express")
const { AdminModel } = require("../db")
const adminRouter = Router()

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
            password: parseData.data.password
        })
        if(admin){
            const token = jwt.sign({
                adminID: admin._id
            }, JWT_USER_PASSWORD)
            res.json({
                token: token
            })       
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
adminRouter.post("/course", (req, res)=>{

})
adminRouter.put("/course", (req, res)=>{

})
adminRouter.get("/course/bulk", (req, res)=>{

})

module.exports = {
    adminRouter: adminRouter
}