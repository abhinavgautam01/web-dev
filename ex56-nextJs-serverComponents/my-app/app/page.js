// "use client"
// import { useState, useEffect } from "react"
import fs from "fs/promises"
import Navbar from "@/components/Navbar"
//we have to change nextjs project from server side to client side to use :-> hooks(useState, useEffect...etc)
//nextJs is full stack framework...we can do front-end(on Browser) using client side and back-end using server-side

export default function Home() {
  // const [count, setCount] = useState(0)
  // console.log("hello")
  // let a = fs.readFile(".gitignore")
  // a.then(e=>{console.log(e.toString())})


  return (
   <div>
    <Navbar/>
    I am a component 
    {/* {count} */}
    {/* <button onClick={()=>setCount(count+1)}>Click me</button> */}
   </div> 
  )
}
