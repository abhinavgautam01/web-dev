"use client"
//to use style jsx, ensure you are using client component..!
//jsx styles are applied within there scope/div...it is used when you want to do styles in very localise manner...we can also use that for global...
import React from 'react'

const About = () => {
  return (
    <div>
        <div className='container'>
        <h1>This is about me...!</h1>
        <p>Hey i am a good boy..!</p>

        <style jsx global>{`
            .container{
                background-color: red;   
                color : green;
                }
                `}
        </style>
        </div>
        <div className='container'>
        Hey I am good...!
        </div>
    </div>
  )
}

export default About
