import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { counterAtom } from "./store/atoms/counter";
import { isEvenSelector } from "./store/atoms/selectors/counter-selector";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+2)}>Increase</button>
      <button onClick={()=>setCount((c)=>c-1)}>Decrease</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom)
  console.log("Counter Component re-render")
  return (
    <div>
      Count : {count}
    </div>
  )
}

function IsEven() {
  const even = useRecoilValue(isEvenSelector)
  console.log("isEven Component re-render")
  return (
    <div>
      {even ? "Count is Even" : "Count is Odd"}
    </div>
  )
}

export default App;
