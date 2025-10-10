import { useEffect, useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Counter />
        <Clock />
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }
  function decreaseCounter() {
    setCount(count - 1);
  }
  function resetCounter() {
    setCount(0);
  }
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
}

function Clock() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h3>Clock: {count}</h3>
    </div>
  );
}

export default App;
