const fs =require("fs")

// console.log(fs)

console.log("Starting...!")
fs.writeFileSync("golu1_writefilesync.txt", "Abhinav is a good boy...") //make wait to other statments;  blocking code
fs.writeFile("golu2_writefile.txt", "Golu is a good boy...", ()=>{ //will schedule it for later; remaining command will continue to work..!
    console.log("Done...!");
    fs.readFile("golu2_writefile.txt",(error, data)=>{
        console.log(data.toString());
    })
}) 
fs.appendFile("golu1_writefilesync.txt"," Hello World", (e,d)=>{
    console.log(d)
})
console.log("Ending...!")

