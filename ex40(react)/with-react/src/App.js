import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // value : variable , useState defines the value of variable
  const[value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar Text="Trying react for first time...!" />
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Click Me</button>
      <Footer/>    
    </div>
  );
}

export default App;
