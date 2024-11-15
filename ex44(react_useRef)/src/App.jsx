import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // // Use 1 :=>
//   // let a = 0
//   const a = useRef(0)
//   // by using useRef(reference) hook particular component(variable...) does not re-render across all the components...its value persists and continue to change every time when operation/event is triggered...!
//  but when useRef hook is not is not used the value does not persist..every time the component is re-rendered the function is also re-rendered and the value intializes again to base value( like a=0, will continue to change to a=0 everytime the component is re-rendered) 

//   //by using useState /useEffect/ it re-render, each time it is used...!
//   useEffect(() => {
//     a.current=a.current+1     //value can be fetched by .current of the variable 
//     console.log(`rerendering and the value of a is ${a.current}...`)
//   })

// Use 2 :=>
  //we can also access any Document object model(DOM) element 
    // let a = 0
    const btnref = useRef()
  
    useEffect(() => {
      console.log(`First rendering...`)
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
