"use client"
import {submitAction} from "@/actions/form"
import { useRef } from "react";

//server actions : are stored in actions and are imported from there ; these actions are done to perform operations on server side..!
//you don't have to create api's every time, you can create server components as well..!

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="text-black mx-5 border border-red-500 " />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" type="text" className="text-black mx-5 border border-red-500" />
        </div>
        <div>
          <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
