// const fs = require("fs").promises; //for Asynchronously but ordered
const fs = require("fs"); //for Asynchronously but non-ordered and Synchronously


// Asynchronously but ordered
// async function main() {
//     let contents1 = await fs.readFile("a.txt", "utf-8")
//     console.log(contents1)
    
//     let contents2 = await fs.readFile("b.txt", "utf-8")
//     console.log(contents2)
    
//     let contents3 = await fs.readFile("a.txt", "utf-8")
//     console.log(contents3)
// }
// main()

// Asynchronously but non-ordered
// fs.readFile("a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// });

// fs.readFile("b.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// });

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// });

// Synchronously 

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("a.txt", "utf-8");
console.log(contents3);