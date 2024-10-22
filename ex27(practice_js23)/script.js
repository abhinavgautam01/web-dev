
// import {a,d,b,c} from "./module1.js"
// import golu from "./module1.js"


console.log(golu) //default import


console.log(a,b,c,d)  //named import
console.log(a+d)
console.log(d)


// const fs = require("fs")
// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   // res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



const a = require("./module2.js")
console.log(a, __dirname)

f