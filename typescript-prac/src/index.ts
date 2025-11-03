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

interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

let user: User = {
    id: "1",
    name: "Golu",
    age: 21,
    email: "golu@gmail.com",
    password: "asdf"
}

type UpdatedProps = Pick<User, "name" | "age" | "email" >

function logDetails(user: UpdatedProps) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`)
}

logDetails(user);