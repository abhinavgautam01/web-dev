// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// npm create vite@latest

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
  <>
    <Navbar/>
    <div className="cards">
      <Card title="Card 1" description="Description of Card 1"/>
      <Card title="Card 2" description="Description of Card 2"/>
      <Card title="Card 3" description="Description of Card 3"/>
      <Card title="Card 4" description="Description of Card 4"/>
    </div>
    <Footer/>
  </>
  )
}

export default App
