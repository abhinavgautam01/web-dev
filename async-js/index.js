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

const fs = require("fs");
function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    data = data.trim();
    fs.writeFile(filePath, data, function () {
      cb();
    });
  });
}

function onDone() {
  console.log("file has been cleaned");
}
cleanFile("a.txt", onDone);

const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

async function main() {
  await cleanFile("a.txt");
  console.log("Done cleaning file");
}

main();
