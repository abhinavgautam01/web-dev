import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  
//     useEffect(()=>{
//     alert("color was changed..!")
//   },[color])
  

// Case 1 : Run on every render
  useEffect(() => {
    alert("Hey I will run on every render..!")
  },)
  
  // Case 2 : Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render..!")
  }, [])
  
  // Case 3 : Run only on when certain values change
  useEffect(() => {
      alert("Hey I am running because color was changed..!")
    }, [color])
  
    // Case 4 : Return function within useEffect
  useEffect(() => {
      alert("Hey welcome to my page. This is the first render of app.jsx..!")

      return ()=>{
        alert("Component was unmounted...!")
      }
    }, [])


    return (
    <div>
      I am navbar of {color} color..!
    </div>
  )
}

export default Navbar
