import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from './redux/counter/countrSlice'

//redux: it is single source of truth, where our states are stored and we can update from the single source, we can read an write from a single supply..!
//https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux
// Store - is what holds all the data your application uses.
// Reducer - is what manipulates that data when it receives an action.
// Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.
// Reducer is usually in the format of a switch statement that switches between all possible Actions (cases) and then manipulates the Store data based on the action. When reducer data changes within redux, the properties in your components are changed and then the re-rendering occurs.
// Dispatch -> Way how we execute the action. eg: Dispatch the action to the reducer. Then reducer will check what to do and the store gets updated.
// dispatcher: To change something in the state, you need to dispatch an action. (and that is what dispatcher does)

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar/>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        Currently count is {count} 
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(incrementByAmount(7))}>+7</button>
      </div>
      <button onClick={()=>dispatch(multiply())}>*</button>
      </>
  )
}

export default App
