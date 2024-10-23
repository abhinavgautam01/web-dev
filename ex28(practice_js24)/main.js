import fs from "fs/promises"
let a = await fs.readFile("golu1_writefilesync.txt")

let b = await fs.appendFile("golu1_writefilesync.txt",
    "\n\nappendFile...!\n this is amazing promise")
console.log(a.toString(), b)