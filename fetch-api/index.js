const express = require("express")

const app = express()

let request_count = 0
// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

app.use(function(req, res, next){
    console.log("", req.method)
    console.log("", req.url)
    request_count = request_count + 1;
    next() 
})
// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
  res.send('This route uses route-specific middleware!');
});

app.get("/add", (req, res)=>{
    a = parseInt(req.query.a)
    b = parseInt(req.query.b)
    res.send(a+b)
})
app.get("/sub", (req, res)=>{
    a = parseInt(req.query.a)
    b = parseInt(req.query.b)
    res.send(a-b)
    
})
app.get("/multiply", (req, res)=>{
    a = parseInt(req.query.a)
    b = parseInt(req.query.b)
    res.send(a*b)
    
})
app.get("/divide", (req, res)=>{
    a = parseInt(req.query.a)
    b = parseInt(req.query.b)
    if(b){
        res.send(a/b)
    }else{
        res.send("Can't divide by zero..!")
    }
})

app.get("/get_request_count", (req, res)=> {
    res.send(request_count)
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})