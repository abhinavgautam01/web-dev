import React from 'react'

const Login = () => {
  return (
    <div>
      Admin Login
      <p>Feel free to login as an Admin</p>
    </div>
  )
}

export default Login

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'Admin Login : Facebook',
  }
}