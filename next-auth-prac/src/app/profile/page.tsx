"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
    const [profileImage, setProfileImage] = useState("")
  useEffect(() => {
    axios.get("http://localhost:3000/api/profile", {
      headers: { authorization: localStorage.getItem("token") },
    }).then(res=>{
        setProfileImage(res.data.avtarurl)
    })
  }, []);

  return <div>
    {profileImage}
  </div>;
}
