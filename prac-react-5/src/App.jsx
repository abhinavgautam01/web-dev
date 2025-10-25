import { useState } from 'react'
import './App.css'
import { useFetch, } from './hooks/useFetch';

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
  return (
    <div>
      <Post />
      <Counter />
      {/* <Counter />
      <Counter />
      <Counter /> */}
    </div>
  )
}

function Post(){
  // const post = usePost()
  const [currentPost, setCurrentPost] = useState(1)
  const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)

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
