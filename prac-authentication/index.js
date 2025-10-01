const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

const JWT_SECRET = "thisISTheSecret"

app.use(express.json())

let users = []

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup", (req, res)=> {
    const username = req.body.username 
    const password = req.body.password 
    
    const user = users.find(u=>u.username === username)
    if(!user){
        users.push({
            username: username,
            password: password
        })
    
        res.json({
            message: "You are signed up"
        })
    }else {
        res.json({
            message: "Already Signed up"
        })
    }

})
app.post("/signin", (req, res)=> {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(u=>u.username === username && u.password === password)

    if(user){
        // const token = generateToken()
        // user.token = token
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        res.json({
            token: token
        })
        console.log(users)
    }else {
        res.status(403).json({
            message: "Invalid Username or password..!"
        })
    }

})

app.get("/me", (req, res)=> {
    const token = req.headers.token

    const decodeInformation = jwt.verify(token, JWT_SECRET)

    const username = decodeInformation.username

    const user = users.find(u => u.username === username)

    if(user){
        res.json({
            usernane: user.username,
            password: user.password
        })
    }else {
        res.json({
            message: "Invalid token header"
        })
    }
})

app.listen(3000, ()=> {
    console.log("http:localhost:3000")
})