const fs = require("fs");

// function print(err, content){
//     console.log(content);
// }

// // asynchronously...!
// let file_a = fs.readFile("a.txt", "utf-8", print);
// let file_b = fs.readFile("b.txt", "utf-8", print);

// console.log("Done..!");

// function waitFor3seconds(callback){
//     setTimeout(callback, 3000)
// }

// function main(resolve, ms) {

//     setTimeout(resolve, 5000)
//     console.log("Hello world..!")
// }

// // waitFor3seconds(main)

// function setTimeoutPromisified (ms) {
//     return new Promise(main(resolve, ms))
// }

// setTimeoutPromisified(3000).then(main)

function readTheFile(contents, reject, filename) {
  fs.readFile(`${filename}.txt`, "utf-8",  (err, data) => {
    if (err) {
      reject(err);
    } else {
      contents(data);
    }
  });
}

function readFile(filename) {
  return new Promise((resolve, reject) => {
    readTheFile(resolve, reject, filename);
  });
}

function callback(contents) {
  console.log(contents);
}

let p = readFile("a");

p.then(callback);
// let counter = 0;

// const updateCounter = () => {
//   counter++;
//   console.log(counter);

//   setTimeout(updateCounter, 1000);
// };

// updateCounter();

function writeToFile(filename, content) {
  try {
    fs.writeFile(filename, content, (err, data) => {
      if (err) {
        console.error("Error");
      } else {
        console.log("File has been written successfully");
      }
    });
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

// Usage
writeToFile("a.txt", "Hello, world!");

function cleanFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, _data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const cleanedContent = "";

    fs.writeFile(filePath, cleanedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return;
      }
      console.log("File cleaned successfully.");
    });
  });
}

setTimeout(() => {
  cleanFile("a.txt");
}, 4000);

let counter = 0;

// const updateClock = () => {
//   const now = new Date();

//   // 24-hour format
//   const hours24 = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");

//   // 12-hour format
//   const hours12 = (((now.getHours() + 11) % 12) + 1)
//     .toString()
//     .padStart(2, "0");
//   const ampm = now.getHours() >= 12 ? "PM" : "AM";

//   console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
//   console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);

//   setTimeout(updateClock, 1000);
// };

// updateClock();

//own promise class..!
class Promise2 {
  constructor(fn) {
    function afterDone() {
      this.resolve();
    }
    fn(afterDone);
  }
  then(callback) {
    this.resolve = callback;
  }
}
