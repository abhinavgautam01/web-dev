console.log("Abhinav is a Hacker")
console.log("Gautam is a Hecker")

setTimeout(() => {
    console.log("I am set timeout...!")
}, 0);
setTimeout(() => {
    console.log("I am set timeout 2...!")
}, 0);
console.log("The End...!")
//set timeout is an asyncronization function...

const callback=(arg) => {
    console.log(arg)
}

const loadScript=(src, callback) => {
    let sc=document.createElement("script")
    sc.src=src
    sc.onload=callback("Abhinav")
    document.head.append(sc)
}
//callback: calling function as a parameter of another function...useful to manage codes...
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)