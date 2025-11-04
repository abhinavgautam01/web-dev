// console.log("Types and interfaces")

// interface GoodUser {
//     name: string,
//     age: number,
//     email: string
// }

// interface BadUser {
//     name: string,
//     age: number,
//     email: string,
//     ip: string
// }

// // intersection of two interfaces....this may look like union but it is intersection
// type Users = GoodUser & BadUser

// let user1: Users = {
//     name: "golu",
//     age: 21,
//     email: "golu@gmail.com",
//     ip: "0.1.2.123.1"
// }

// interface User {
//     readonly id: string,
//     name: string,
//     readonly age: number,
//     email: string,
//     password: string
// }

// let user: User = {
//     id: "1",
//     name: "Golu",
//     age: 21,
//     email: "golu@gmail.com",
//     password: "asdf"
// }

// type UpdatedProps = Pick<User, "name" | "age" | "email" >

// type UpdatedPropsPartial = Partial<UpdatedProps>

// function logDetails(user: UpdatedPropsPartial) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`)
// }

// logDetails(user);

// // Records and Maps...

// type User2 = {
//     name: string,
//     age: number,
//     email: string
// }

// // type RecordType = {
// //     [key: string]: User2
// // }

// type RecordType = Record<string, User2>

// let newUser: RecordType = {
//     "id": {
//         name: "name",
//         age: 21,
//         email: "this@gmail.com"
//     }
// }


// let map = new Map<string, User2>()
// map.set("id1", {name: "abc1", age: 21, email: "abc1@gmail.com"})
// map.set("id2", {name: "abc2", age: 21, email: "abc2@gmail.com"})
// map.set("id3", {name: "abc3", age: 21, email: "abc3@gmail.com"})

// let a = map.get("id1")
// console.log(a)

// type EventType = "click" | "scroll" | "mouse_move"

// type ExcludedType = Exclude<EventType, "scroll">

// function event_handler(event: ExcludedType){
//     console.log(`EventType is : ${event}`);
// }

// event_handler("click")
// event_handler("mouse_move")

import { email, z } from "zod"
import express from "express"

const app = express()

const userProfileSchema = z.object({
    name: z.string().min(3, {message: "Minimum length is 3"}).max(20, {message: "Maximum length is 20"}),
    email: z.string().min(7, {message: "minimum length is 7"}).max(30, {message: "maximum lengtgh is 30"}),
    age: z.number().min(18).optional()
})

type finalUserSchema = z.infer<typeof userProfileSchema>

app.put("/", (req, res)=> {
    const { success } = userProfileSchema.safeParse(req.body)
    const user: finalUserSchema = req.body;
    if(!success){
        res.status(411).json({
            messsage: "Invalid Data"
        })
        return
    }
    
    // update database here


    res.status(200).json({
        message: `${user.name}'s details updated`
    })
})

app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})
