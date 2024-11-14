import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // const getAdjactive = () => {
  //   return "another" + count
  // }

  //useCallback freeze/lock the funtion, since f1()!=f1() in javascript so it keep re-rendering thinking of that props are changed...so useCallback fix this by freezing the function...!
  const getAdjactive = useCallback(() => {
        return "another" + count
      },[count])
  //above function will change the value of count since we have put the dependecy of count in it...! If we do not put that dependency it will not change , even if the page is rendered because of useCallack as it freezes the function...!  OR we can say useCallback hook memoise functions as memo hook memoise variables


  return (
    <>
      <div>
        <Navbar adjective={"good"} getAdjactive={getAdjactive}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
