const express = require("express")

const app = express()

// express().use(express.json());

// 192.168.1.4


var users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: true
            },
            {
                healthy: false
            },
        ]
    }
]

console.log(users[0])

app.use(express.json());
app.get("/", (req, res)=>{
    res.send("hi there")
})
app.post("/", (req, res)=>{
    if(req.query.name){
        let name = req.query.name
        res.send(`Happy Birthday ${name}`)
    }else {
        res.send("Name Undefined")
    }
})

app.listen(3000, ()=>{
    console.log("Listening on : http://localhost:3000")
})