const fs = require("fs");

function print(err, content){
    console.log(content);
}

// asynchronously...!
let file_a = fs.readFile("a.txt", "utf-8", print);
let file_b = fs.readFile("b.txt", "utf-8", print);

console.log("Done..!");