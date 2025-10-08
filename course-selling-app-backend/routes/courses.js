const { Router } = require("express")
const { userMiddleware } = require("../middleware/user")
const { PurchasesModel, CourseModel } = require("../db")

const coursesRouter = Router()

coursesRouter.get("/preview", async (req, res)=>{
    const courses = await CourseModel.find({})

    res.json({
        courses: courses
    })
})
coursesRouter.get("/purchases", userMiddleware, async (req, res)=>{
    const userId = req.userId
    const courseId = req.body.courseId;
    await PurchasesModel.create({
        userId: userId,
        courseId: courseId
    })

    res.json({
        message: "Course Purchased Successfully"
    })
})

module.exports = {
    coursesRouter: coursesRouter
}