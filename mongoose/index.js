const express = require("express")
const { UserModel, TodoModel } = require("./db")
const { auth, JWT_SECRET } = require("./auth")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Abhinav:8nrTtViVDDj0wa2Q@cluster0.3dreo8i.mongodb.net/todo_application")

app.post("/signup", async (req, res)=>{
    username = req.body.username;
    email = req.body.email;
    password = req.body.password

    const user = await UserModel.findOne({
        email: email,
    })
    if(user){
        res.json({
            message: "User already exist"
        })
    }else{
        await UserModel.create({
            username: username, 
            email: email,
            password: password
        })
    
        res.json({
            message: "User signed up"
        })
    }
})
app.post("/signin", async (req, res)=>{
    email = req.body.email
    password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password,
    })
    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET)

        res.header("jwt", token)
        res.json({
            token: token
        })
    }else {
        res.status(403).json({
            message: "User not Found. Incorrect Credentials"
        })
    }
})
app.post("/create-todo", auth, async (req, res)=>{
    title = req.body.title;
    userId = req.userId
    try {
        await TodoModel.create({
            title: title,
            done: false,
            userId: userId
        })
    
        res.json({
            message: "Todo added succesfully"
        })
    } catch (error) {
        res.json({
            message: `${error}`
        })
    }
})
app.get("/get-todos", auth, async (req, res)=>{
    userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })
    console.log(todos)
    res.json({
        todos: todos
    })
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})