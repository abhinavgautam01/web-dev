console.log("Hello World...")

let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{   //events click, dblclick, mousemove, contextmenu...
    // alert("I was clicked..!")
    document.querySelector(".box").innerHTML="you were clicked...<b>Enjoy your click!</b>"
})
button.addEventListener("contextmenu",()=>{
    alert("Right click please..!")
})
document.addEventListener("keydown",(e)=>{
    console.log(e,e.key)
})