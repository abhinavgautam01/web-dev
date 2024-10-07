console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".box").outerHTML)
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".box").nodeName)
//tag name is only applicable for tag and node name is applicable for all nodes...
console.log(document.querySelector(".container").textContent)
console.log(document.querySelector(".box").textContent)
console.log(document.querySelector(".container").hidden)
console.log(document.querySelector(".container").hidden=true)
console.log(document.querySelector(".container").hidden=false)

console.log(document.querySelector(".box").innerHTML="Hey i am Abhinav Gautam")

console.log(document.querySelector(".box").hasAttribute("style"))//to check whether the attribute is present in the selected query...
console.log(document.querySelector(".box").getAttribute("style"))//shows the attribute prop...
console.log(document.querySelector(".box").setAttribute("style", "display: inline"))
console.log(document.querySelector(".box").attributes)
console.log(document.querySelector(".box").removeAttribute("style"))


//document.designMode="on"


console.log(document.querySelector(".box").dataset)

let div=document.createElement("div")
div.innerHTML="I have been inserted by<b>Abhinav</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)//.before

let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b>hello ...i am afterend of container ...inserted by insertadjacenthtml</b>")//insert directly into into html tag
//insertAdjacentHTML/Text/Element
document.querySelectorAll(".box")[1].remove()//remove the selected one...

console.log(document.querySelector(".container").classList)
document.querySelector(".container").classList.add("golu")
console.log(document.querySelector(".container").classList)
document.querySelector(".container").classList.remove("golu")
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").className)