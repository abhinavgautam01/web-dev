import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // // Use 1 :=>
//   // let a = 0
//   const a = useRef(0)
//   // by using ref does not re-render....

//   //by using useState /useEffect/ it re-render, each time it is used...!
//   useEffect(() => {
//     a.current=a.current+1
//     console.log(`rerendering and the value of a is ${a.current}...`)
//   })

// Use 2 :=>
    // let a = 0
    const btnref = useRef()
  
    useEffect(() => {
      console.log(`First rerendering...`)
      btnref.current.style.backgroundColor = "red"
    },[])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{btnref.current.style.display = "none"}}>Change Me</button>
    </>
  )
}

export default App
