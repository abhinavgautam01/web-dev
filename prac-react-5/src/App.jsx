import { useState } from 'react'
import './App.css'

function useCounter() {
  const [count, setCount] = useState(0)

  function increase_count(){
    setCount(count + 1);
  }

  return {
    count,
    increase_count
  }
}

function App() {
  const {count, increase_count} = useCounter()
  return (
    <div>
      <div>
        Count: {count}  
      </div>
      <button onClick={increase_count}>Increase_Count</button>
    </div>
  )
}

export default App
