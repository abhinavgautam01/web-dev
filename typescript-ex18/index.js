"use strict";
// const map = <T, U>(array: T[], func:(item:T)=>U): (U|T)[]=>{
//     if(array.length === 0){
//         return array
//     }
//     let result: U[] = []
//     for(let i = 0; i<array.length; i++){
//         result.push(func(array[i]))
//     }
//     return result
// }
// let numbers = [4, 5, 6, 7, 8, 9]
// const converted = map(numbers, (num)=>num.toString())
// console.log("numnbers[]: ", numbers);
// console.log("converted: ", converted);
//classes
class User {
    constructor() {
        this.name = "Golu";
        this.email = "golu@gmail.com";
    }
    greet() {
        return 'Hello Golu';
    }
}
const user = new User();
console.log("User: ", user);
console.log("User: ", user.greet());
class newUser {
    constructor(name, email) {
        console.log(name);
        console.log(email);
    }
    greet() {
        return 'Hello Golu';
    }
}
const newuser = new newUser("Abhinav", "abcd@gmail.com");
