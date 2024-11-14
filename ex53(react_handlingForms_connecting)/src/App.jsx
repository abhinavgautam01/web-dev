import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting},
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2)  //Simulating network delay
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify(data)})
    let res = await r.json()
    console.log(data, res)
  //   if(data.username !== "Abhinav"){
  //     setError("myform", {message:"Form not submitted...Credentials are invalid...!"})
  //   }
  //  if(data.username === "Golu"){
  //     setError("blocked", {message:"Sorry...this user is blocked..!"})
  //   }
  }

  return (
    <>
    {isSubmitting && <div>Loading...!</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' type="text" {...register("username", { required: {value: true, message: "This field is required...!"}, minLength: {value:3, message: "Minimum length is 3...!"}, maxLength: {value:8, message: "Maximum length is 8...!"} })} />
          {errors.username && <div className='red'>Error: {errors.username.message}</div>}
          <br />
          <input placeholder='password' type="password" {...register("password" , {required: {value: true, message: "This field is required...!"}, minLength: {value:7, message: "Minimum length of password is 7...!"} })}/>
          {errors.password && <div className='red'>Error: {errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>Error: {errors.myform.message}</div>}
          {errors.blocked && <div className='red'>Error: {errors.blocked.message}</div>}
        </form>
      </div>

    </>
  )
}

export default App
