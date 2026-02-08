import express from "express"

const app = express();

app.get("/", (req, res)=>{
    res.json({
        message: "Hello from http-server"
    })
})

app.get("/chat", (req, res)=>{
    
})


app.listen(3001, ()=>{
    console.log("http://localhost:3001")
})