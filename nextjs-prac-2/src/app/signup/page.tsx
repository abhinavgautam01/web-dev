"use client";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex-col justify-items-center">
        <div className="m-1">
          <input
            className="border rounded-xl m-2 p-2"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
          />
          <input
            className="border rounded-xl m-2 p-2"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="border rounded-xl p-2">
          <button
            onClick={() => {
              axios.post("http://localhost:3000/api/v1/signup", {
                username,
                password,
              });
            }}
            className="pl-2 pr-2 font-semibold cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
