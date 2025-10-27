import { useEffect, useState } from 'react'
import './App.css'
import { useCounter, useDebounce, useDebounceSecondImplementation, useFetch, usePrev, } from './hooks/useFetch';

function App() {
  return (
    <div>
      <Post />
      <DebouncedComponentTwo />
      <Counter />
      {/* <Counter />
      <Counter />
      <Counter /> */}
      <DebouncedComponent/>
    </div>
  )
}

function Post(){
  // const post = usePost()
  const [currentPost, setCurrentPost] = useState(1)
  const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`, 5)
  
  if(loading){
    return (
      <div>
        Loading...!
      </div>
    )
  }
  return (
    <div>
      <button onClick={()=>setCurrentPost(1)}>Post 1</button>
      <button onClick={()=>setCurrentPost(2)}>Post 2</button>
      <button onClick={()=>setCurrentPost(3)}>Post 3</button>
      <div>
        {JSON.stringify(finalData)}
      </div>
    </div>
  )
}

function Counter() {
  const {count, increase_count} = useCounter()
  const prevValue = usePrev(count)

  return (
    <div>
      <div>
        Count: {count}  
      </div>
      <button onClick={increase_count}>Increase_Count</button>
      <div>
        <p>Previous value was: {prevValue}</p>
      </div>
    </div>
  )
  
}

function DebouncedComponent(){
  function sendBackendCall(){
    fetch("api.amazon.com/search")
  }
  const debounceFn = useDebounce(sendBackendCall)
  return (
  <div>
    <input type='text' onChange={debounceFn}/>
  </div>
  )
}
function DebouncedComponentTwo(){
  const [inputVal, setInputVal] = useState()
  
  const debouncedValue = useDebounceSecondImplementation(inputVal, 300)

  function change(e){
    setInputVal(e.target.value);
  }

  useEffect(()=>{
    console.log("expensive Operation called..!")
  }, [debouncedValue])

  return (
  <div>
    <input type='text' onChange={change}/>
  </div>
  )
}

export default App
