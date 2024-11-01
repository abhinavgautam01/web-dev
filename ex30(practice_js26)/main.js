const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
 


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World221!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["golu", "Abhinav"] })
    
})
app.get("/api/first_api", (req, res) => {
    res.send("This is the first api ")
    // res.json({ a: 1, b: 2, c: 3, d: 4, name: ["golu", "Abhinav"] }) not working with res.send
    
})
app.get("/api/second_api", (req, res) => {
    // res.json({ a: 1, b: 2, c: 3, d: 4, name: ["golu", "Abhinav"] })
    res.send("This is Second api..!")
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})