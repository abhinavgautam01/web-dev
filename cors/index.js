const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:60770"
}))

app.post("/sum", (req, res)=>{
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)

    res.json({
        sum: a + b
    })
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})