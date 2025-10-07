const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const PORT = 3000

const { userRouter } = require("./routes/users")
const { coursesRouter } = require("./routes/courses")
const { adminRouter } = require("./routes/admin")

const app = express()
app.use(express.json())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/courses", coursesRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_DB)
    app.listen(PORT, ()=>{
        console.log(`Listening on http://localhost:${PORT}`)
    })
    
}
main()