const express = require("express")
const { userRouter } = require("./routes/users")
const { coursesRouter } = require("./routes/courses")

const app = express()

app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", coursesRouter)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})