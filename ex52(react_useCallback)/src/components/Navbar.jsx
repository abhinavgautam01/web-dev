import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjactive}) => {
    console.log("Navbar is rendered..!")
  return (
    <div>
      I am a {adjective} Navbar..!
      <button onClick={()=>{getAdjactive()}}>{getAdjactive()}</button>
    </div>
  )
}

export default memo(Navbar)