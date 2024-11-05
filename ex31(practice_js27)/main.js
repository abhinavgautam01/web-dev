const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

app.use(express.static("public")) //  , used for displaying file like (html,txt) from public

app.use('/blog', blog)

//middleware can change request/can modify request, can send the response or can give control to next middleware


// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    // console.log(req.headers)
    req.golu = "I am Gautam bhai";

    
    const timestamp = Date.now();
    const date = new Date(timestamp);
    // console.log(date.toString()); // to get a full readable date string
    // console.log(date.toISOString()); // to get it in ISO format


    fs.appendFileSync("logs.txt", `${date.toString()} by ${req.method} method.\n`) //create a file and append time stamp...
    console.log("m1")
    console.log(`${date.toString()} by ${req.method} method`)
    // res.send("Hacked by Middlware 1"), if it is send there should be no next...!
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.golu = "I am Golu bhai";
    next()
})
//After middleware 2 the pointer move to app.get ,by next
app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("This is a Get...!")
})
.post('/', (req, res) => {
    res.send('Hello World!')
    console.log("This is a Post...!")
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.golu)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})