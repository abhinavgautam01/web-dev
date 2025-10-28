import "./App.css";
import { useState, createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "./store/atoms/counter";

const CountContext = createContext();
function App() {
  return(
    <RecoilRoot>
    <ValueTwo />
    <IncreaseTwo />
    <DecreaseTwo />
  </RecoilRoot>
  )
}
function App2() {
  // if wrapper component is not created
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CountContext.Provider value={{count, setCount}}> */}
        <Context>
          <Value />
          <Increase />
          <Decrease />
        </Context>
        {/* </CountContext.Provider> */}
      </div>
    </>
  );
}

function Value(){
  const {count} = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  )
}

function Increase(){
  const {count, setCount} = useContext(CountContext)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
function Decrease(){
  const {count, setCount} = useContext(CountContext)
  return (
    <div>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function ValueTwo(){
  const count = useRecoilValue(counterAtom)
  return (
    <div>
      {count}
    </div>
  )
}

function IncreaseTwo(){
  const setCount = useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={()=>setCount(count=> count+1)}>Increase</button>
    </div>
  )
}
function DecreaseTwo(){
  const setCount = useSetRecoilState(counterAtom)
  return (
    <div>
      <button onClick={()=>setCount(count=> count-1)}>Decrease</button>
    </div>
  )
}

function Context({children}){
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}



export default App;
