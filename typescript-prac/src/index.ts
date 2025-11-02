console.log("Types and interfaces")

interface GoodUser {
    name: string,
    age: number,
    email: string
}

interface BadUser {
    name: string,
    age: number,
    email: string,
    ip: string
}

// intersection of two interfaces....this may look like union but it is intersection
type Users = GoodUser & BadUser

let user1: Users = {
    name: "golu",
    age: 21,
    email: "golu@gmail.com",
    ip: "0.1.2.123.1"
}