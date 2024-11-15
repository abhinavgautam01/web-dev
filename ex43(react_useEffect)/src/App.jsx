import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)


//useEffect is a react hook, which runs after mounting of component :-> it provides sideEffects as something will happen like (dataFetch, logData, retrive data from  database, or give any alert) after a particular component is rendered

  useEffect(() => {
    alert("Count was changed")
    setColor(color+1)
  }, [count])
  //like in above useEffect, it will be only triggered when the value of count was rendered/changed and alert message will be displayed and it will also change/render value of color and trigger useEffect of case 3 (which is in Navbar.jsx)..!
  
  return (
    <>
      <Navbar color={"navy " + " blue "  + color}/>
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
