"use strict";
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3));
console.log(addNumbers(3, 3));
//Primitve Data Types: string, number, boolean types
var firstname = "John";
firstname = "Golu";
//manually assigning type to variables , is known as annotation...!
let automobile = "BMW";
//guessing of type by typescript is known as inference..!
let automobile2 = "BMW";
const city = "New York";
//since const values cannot be re assigned...typescript gives literal value to it...as: city = "New York"
let students = 32;
let studentsAsString = students.toString();
var age = 32;
let year = 2024;
const numberOfMembers = 61;
// numberOfMembers=68 ERROR
let stringToNumber = parseInt("2004");
let isStudent = false;
const alwaysStudent = true; //it will remain always true, as it is a constant..!
let minimumAge = age > 6 ? true : false;
//null and undefined types...
let user;
// this variable is undefined
console.log("user: ", user);
//whenever a value is not assigned, it is declared as undefined..!
let userRole;
userRole = null;
console.log("userRole", userRole);
console.log(user == userRole); // it only checks the value
console.log(user === userRole); // it checks the value, along with the data type
//conditional statements confuses both the null and undefined data types, as an example :-> both if condithions run below..!
if (!userRole) {
    console.log("!userrole condition gives true..!");
}
if (!user) {
    console.log("!user condition gives true..!");
}
const safeInt = Number.MAX_SAFE_INTEGER;
console.log("max safe integr: ", safeInt);
//max safe integer is the number provided in javascript, beyond that you cannot access numbers....before bigInt
let bigInt1 = BigInt(1234); // bigInt 
let bigInt2 = 123465582n;
console.log("bigInt1 : ", bigInt1);
console.log("bigInt2 : ", bigInt2);
//bigint cannot be declared with floating point numbers..only integer variables...!
let c = bigInt1 - bigInt2;
console.log("c : ", c);
//bigint is a separate data type and cannot be used in parameters instead of using numbers, where numbers is defined or needed...!
//symbol Type : can be created using symbol constructor
//that ensures that you have given a unique value..
let alphabeticId = Symbol("id");
let id = Symbol(1234);
let admin = {
    [id]: "23",
    name: "Mark",
    getId() {
        return this[id];
    },
};
console.log("name of admin : ", admin.name);
// console.log("ID of admin : ",admin.id);
console.log("ID of admin : ", admin.getId());
console.log("id : ", id);
//any type is most liberal type, settin
let fullName = "mark";
fullName = 1;
fullName = [];
// function returnParam(params){
//     return params
// }
//above function will return error, as it will inference params by any type...to avoid this you have to declare it with script type..!
//unknown type..! : it is better than any type, but not an ideal solution ..!
function multiplyByTwo(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide a valid number..!";
}
let result = multiplyByTwo("abc");
console.log("result :: ", result);
// type Custom = ;
// type Custom = ;
// type Custom = ;
// type Custom = ;
// type Custom = ;
// type Custom = ;
// type Custom = ;
let firstName = "Mark";
let ageGolu = 20;
