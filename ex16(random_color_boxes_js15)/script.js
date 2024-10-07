console.log("Hello world...")

//first method to access the boxes
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// Array.from(boxes).forEach(e=>{
//     console.log(e)
// })

//second method
let boxes=document.querySelector(".container").children

function getrandomcolor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

console.log(boxes)
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getrandomcolor()
    e.style.color=getrandomcolor()
})