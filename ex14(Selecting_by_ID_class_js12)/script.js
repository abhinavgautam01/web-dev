console.log("Golu")
let boxes=document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor="Black"
// boxes[2].style.color="Green"
// document.getElementById("red-box").style.backgroundColor="red"
//getelementid and getelementsclass....#s
console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").style.backgroundColor="green"    error:cannot set properties of undefined(cannot style array or string...select element to style...)
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="blue"
    // console.log(element)
})
document.querySelector(".box").style.backgroundColor="green"
x=document.getElementsByTagName("div")
console.log(x)
console.log(document.getElementsByTagName("div"))
console.log(x[3].matches("#red-box"))
console.log(x[5].matches("#red-box"))
console.log(x[6].matches("#red-box"))
console.log(x[6].closest("#red-box"))
console.log(x[3].closest(".container"))
console.log(x[2].closest(".box"))
console.log(x[6].closest("html"))
console.log(document.querySelector(".container").contains(x[2]))
console.log(document.querySelector(".container").contains(x[6]))
console.log(document.querySelector(".container").contains(x[9]))
console.log(document.querySelector("body").contains((document.querySelector(".container"))))
console.log(document.querySelector(".container").contains((document.querySelector("body"))))