import React from 'react'
import { NavLink } from 'react-router-dom'
//NavLink is used so that page does not refresh , just it changes the /address when opened new link ...!
const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{ return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{ return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{ return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar