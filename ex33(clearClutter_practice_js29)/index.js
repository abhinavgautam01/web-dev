// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "/Users/gautam/Documents/web/ex33(practice_js29)"
//pwd : print working directory
let files = await fs.readdir(basepath)

for (const item of files) {
    // console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]   //let ext = item.split(".").pop(); // Get the file extension
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        const extFolder = path.join(basepath, ext); // Target folder path

        if (fsn.existsSync(path.join(basepath, ext))) {
            // if (fsn.existsSync(path.join(basepath, ext))) {   //if (fsn.existsSync(extFolder))
            // Move the file to this directory if its not a js or json file
            await fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            await fs.mkdir(extFolder)
            await fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}