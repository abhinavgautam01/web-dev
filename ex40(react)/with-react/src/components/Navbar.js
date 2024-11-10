import React from 'react'
import Footer from './Footer'

const Navbar = ({Text="Default Text"}) => {
  return (
    <div>
      <div className="logo">{Text}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar
