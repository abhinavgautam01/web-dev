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


//Declaration: declaring you own tpyes..!
type CustomDate = Date
let Today:CustomDate = new Date()
console.log("Today's Date: ", Today)

//Anotation: assigning strict type to varible..!
let num:number 

//inferenece: automatically assign type to the variable...according to the value assigned..!
let str = 12 //infered to number



//union types: simple for primitve types..complex for union of declared types..!
type StringOrNumber = string | number
let strornum1:StringOrNumber = 332
let strornum2:StringOrNumber = "dfsd"

type NumberOrUndefined = number | undefined
type StringNumberOrUndefined = string | number | undefined
type DateOrUndefined = Date | undefined

function print(input: string |undefined){
    if(input){
        console.log(input)
    }
    else{
        console.log("Enter any input to print..!")
    }
}
print()
print("Hello World..!")

//Conditional Types...!
type CustomDate2 = Date
type CustomString = string

type TrueString = CustomString extends string ? true : false
type ConditionalNumber = CustomDate extends Date ? number : string
type DateAssignment = CustomDate extends Date ? Date : undefined

type check = undefined extends unknown ? true :  false//true because undefined is sub-type of unknown..!
//every subType extends for its parent or grandparent Type..!

const throwError = (errMessage:string)=>{
    throw new Error(errMessage)
}
//never type is used for throwing errors, so that the process can't be completed...OR never completed

let a:string[] = ["a", "b"]
let myFunc:Function = () => 2
console.log("myFunc :", myFunc());
console.log("string[] stringArray :", a);


//Type Casting... cast oone type into another
let firstName = <any>"Golu"
let lastName = "Gautam" as any
let user = {
    serialNumber: 12,
    name: "Golu",
    email: ""
}

type User = {
    serialNumber : number
    name : string
    email : string
}

function fetchUser(){
    return user as User // return <User>user
}

const fetchedUser = fetchUser()
console.log("fetched User : ", fetchedUser);
type primitve = string | number | boolean
type CustomName = "Golu" extends string ? string : "Golu"