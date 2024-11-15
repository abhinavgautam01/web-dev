import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//react router is used to make multiple page application...and by using this our page does not reload , while surfing through multile pages..!
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User/></>
    }
])
  return (
    <>
    {/* <Navbar/> */}
    <RouterProvider router = {router} />

    </>
  )
}

export default App
