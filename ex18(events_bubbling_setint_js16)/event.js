document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()          
    //stop bubbling...or propogation...
    alert("Child was clicked..!")
})
document.querySelector(".childcontainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childcontainer was clicked..!")
})
document.querySelector(".container").addEventListener("click", (e) => {
    //events can be added...and removed also...
    alert("container was clicked..!")
})


function getrandomcolor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// let a=setTimeout(() => {
//     document.querySelector(".childcontainer").style.background=getrandomcolor()
// }, 2000);
//set timeout perform function only once aftr certain period of time...

let a=setInterval(() => {
    document.querySelector(".childcontainer").style.background=getrandomcolor()
}, 1000);
console.log(a)
// clearInterval(1)    to remove set interval...
// clearTimeout(1)     to clear set timeout...

