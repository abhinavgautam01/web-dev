"use client"
import axios from "axios"

export default function SignIn(){
    return (
        <div>
            <div>Sign In</div>
            <div>
                <input name="username" type="text" placeholder="username" />
                <input name="password" type="text" placeholder="password" />
            </div>
            <div><button onClick={async()=>{
                const res = await axios.post("http://localhost:3000/api/signin", {
                    username: "abc",
                    password: "123"
                })
                localStorage.setItem("token", res.data.token)
            }}>Sign In</button></div>
        </div>
    )
}