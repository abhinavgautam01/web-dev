import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

//useState render value with real/present time, not like in noraml javascript program
// let a = 2
// {()=>{a+1}}

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
    )
}

export default App
