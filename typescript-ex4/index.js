"use strict";
//revision...!
// console.log("hello...!")
// let num:number
// let str:string
// let isTrue:boolean
// let bint:bigint
// let sym:symbol=Symbol(1234)
// let a
// console.log("a: ", a)
// let d:unknown
// console.log("d: ", d)
// let b:null
// b=null
// console.log("b: ", b)
// let c:undefined
// console.log("c: ", c)
//...
let Today = new Date();
console.log("Today's Date: ", Today);
//Anotation: assigning strict type to varible..!
let num;
//inferenece: automatically assign type to the variable...according to the value assigned..!
let str = 12; //infered to number
let strornum1 = 332;
let strornum2 = "dfsd";
function print(input) {
    if (input) {
        console.log(input);
    }
    else {
        console.log("Enter any input to print..!");
    }
}
print();
print("Hello World..!");
//every subType extends for its parent or grandparent Type..!
const throwError = (errMessage) => {
    throw new Error(errMessage);
};
//never type is used for throwing errors, so that the process can't be completed...OR never completed
let a = ["a", "b"];
let myFunc = () => 2;
console.log("myFunc :", myFunc());
console.log("string[] stringArray :", a);
//Type Casting... cast oone type into another
let firstName = "Golu";
let lastName = "Gautam";
let user = {
    serialNumber: 12,
    name: "Golu",
    email: ""
};
function fetchUser() {
    return user; // return <User>user
}
const fetchedUser = fetchUser();
console.log("fetched User : ", fetchedUser);
