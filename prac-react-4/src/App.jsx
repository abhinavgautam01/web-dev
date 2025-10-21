import { useState, createContext } from "react";
import "./App.css";
import { useContext } from "react";

const BulbContext = createContext();
function App() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
    <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <Light />
    </BulbContext.Provider>
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
  const { bulbOn } = useContext(BulbContext)
  return (
    <div style={{marginBottom: 10}}>
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
    setBulbOn(currentState => !currentState);
  }
  return <button onClick={toggle}>Toggle </button>;
}

export default App;
