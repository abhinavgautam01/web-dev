import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1611570267002-f20bca67d3b5?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={200} style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
