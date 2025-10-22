import { useState, createContext } from "react";
import "./App.css";
import { useContext } from "react";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// context_api
const BulbContext = createContext();

//state_management_api
const countState = atom({
  key: 'countState',
  default: 0,
});

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}
function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}
function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
}

function Value() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
      <div>
        <Parent />
      </div>
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return (
    <div style={{ marginBottom: 10 }}>
      {bulbOn ? (
        <img
          src="https://cdn-icons-png.flaticon.com/128/702/702797.png"
          width={100}
          height={100}
        />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/128/702/702814.png"
          width={100}
          height={100}
          style={{}}
        />
      )}
    </div>
  );
}

function LightSwitch() {
  const { setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn((currentState) => !currentState);
  }
  return <button onClick={toggle}>Toggle </button>;
}

export default App;
