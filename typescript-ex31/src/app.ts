const user = AuthService.login("user", "password123")
if(AuthService.isLoggedIn()){
    console.log("User is logged in");
}else{
    console.log("Login failed"); 
}
const numbersObject = {
    x: 10,
    y: {
        z:20,
    }
}
console.log((numbersObject));
numbersObject.x = 11
console.log((numbersObject));
let firstNameField = document.getElementById("firstName")! as HTMLInputElement

type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri"
type Day = Weekdays | "Sat" | "Sun"
console.log("------");

//concept of totality
function nextDayForAWeekDay(weekday: Weekdays): Day{
    switch(weekday){
        case "Mon":
            return "Tue"
        case "Tue":
            return "Wed"
        case "Wed":
            return "Thu"
        case "Thu":
            return "Fri"
        case "Fri":
            return "Sat"
    }
}

type ServiceList = UserDetailsAPIResponse["serviceList"] 

type UserDetailsAPIResponse = {
    id: number;
    name: string;
    serviceList: {
        count: number;
        services:{
            id: number;
            name: string;
            price: number;
        }[]
    }
}

function fetchUserDetails(name: string):Promise<UserDetailsAPIResponse>{
    return new Promise((res, rej)=>{
        if(name){
            res({
                id: 23,
                name: "John",
                serviceList: {
                    count: 2,
                    services: [{
                        id: 1,
                        name: "service1",
                        price: 123
                    },{
                        id: 2,
                        name: "service2",
                        price: 321
                    }]
                }
            })
        }else rej(new Error("Pass new a valid name"))
    })
}

function printServiceList(services: ServiceList): void{
    console.log(services);
}

fetchUserDetails("John").then((res)=>{
    console.log(res);
    printServiceList(res.serviceList)
}).catch((err)=>{
    console.log(err);
})

type Events = {
    id: number
    date: Date
    type: "indoor" | "outdoor"
}

type unionOfKeysOfEvents = keyof Events
type Numeric = {
    [key: number]: string
}
type NumericKeyOf = keyof Number

let greeting = "Hello world"
let firstName: typeof greeting

const user1 =  {
    name: "John",
    age: 32
}
let tom: typeof user1
tom = {
    name: "Tom",
    age: 22
}
let numbers = [1, 5, 6, 8, 10]

let stringNumbers = numbers.map((each)=>each.toString())
console.log("stringNumbers: ",stringNumbers);

type NextDay = {
    [W in Weekdays]: Day
}
let nextDay: NextDay = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat"
}


type Artist = {
    id: number
    name: string
    bio: string
}
type MappedArtistForEdit = {
    [Property in keyof Artist]?: Artist[Property]
}&{id: number}

const artist: Artist = {
    id: 1,
    name: "Justin",
    bio: "Hey, I am Justin"
}

const editedAritst: MappedArtistForEdit = {
    id: 1,
    bio: "Hello, I am Justin"
}

interface Animal {
    live: ()=> void
}
interface Dog extends Animal{
    woof: ()=>void
}
type Example = Dog extends Animal ? string: number

type isString<T> = T extends string ? true : false
type A = isString<string>
type B = isString<number>

interface WritePermissions{
    write: true
}
interface ReadPermissions{
    write: false
}

interface User {
    id: number
    name: string
    email: string
}

interface Admin extends User, WritePermissions{}
interface Author extends User, WritePermissions{}
interface Reader extends User, ReadPermissions{}

type FilterWriteable<T> = T extends{write: true}? true : false
type Writable = FilterWriteable<Reader>

type ArrayElementType<T> = T extends (infer E)[] ? E : T
type TypeOne = ArrayElementType<string[]>
type TypeTwo = ArrayElementType<number[]>
type TypeThree = ArrayElementType<(number | string | boolean)[]>
type TypeFour = ArrayElementType<{name: string}>
type TypeFive = ArrayElementType<string>

function returnString(){
    return "string"
}
type FunctionReturnType<T> = T extends ()=> infer R ? R : T
type newType = FunctionReturnType<typeof returnString>

function person(name: string, age: number){
    return{
        name: name,
        age: age
    }
}
type GetFirstArgumentOfAnyFunction<T> = T extends (first: infer FirstArgument, ...args: any[])=> any ? FirstArgument : never
type GetSecondArgumentOfAnyFunction<T> = T extends (first: any, second: infer SecondArgument, ...args: any[])=> any ? SecondArgument : never
type FirstArgument = GetFirstArgumentOfAnyFunction<typeof person>
type SecondArgument = GetSecondArgumentOfAnyFunction<typeof person>


type Properties = "red" | "green" | "blue"
type RGB = [red: number, green: number, blue: number]
const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
} satisfies Record<Properties, RGB | string>
const redComponent = color.red[0]
console.log(redComponent);

const greenValue = color.green.toUpperCase()
console.log(greenValue);

type NewPartial<T> = {
    [P in keyof T]?: T[P]
}

type NewExclude<T, U> = T extends U ? never: T

const promise : Promise<string> = new Promise((res, rej)=>{
    setTimeout(() => {
        res("Done!")
    }, 1000);
})

type AwaitedType = Awaited<typeof promise>

type Roles = "author"|"editor"|"researcher"

interface ArticleUser {
    name: string
    email: string
    age: number
}

interface Article {
    title: string
    content: string
    contributors: Record<Roles, ArticleUser>
}

const article: Article = {
    title: "Title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae nulla fuga.",

    contributors: {
        author: {name: "John", email: "john@email.com", age: 32},
        editor: {name: "Frank", email: "frank@email.com", age: 20},
        researcher: {name: "Mark", email: "mark@email.com", age: 23},
    }
}

interface PersonPickUtility{
    name: string
    age: number
    address: string
}
type NameAndAge = Readonly<Pick<PersonPickUtility, "name" | "age">>

const personOne: NameAndAge= {
    name: "Golu",
    age: 20
}

// personOne.name = "else"
// console.log(personOne.name);


interface UserOmit {
    name: string
    age: number
    email: string
    password: string
}

type LimitedUser = Omit<UserOmit, "age"| "password">
const limitedUser: LimitedUser = {
    name: "John",
    email: "john@gmail.com"
}
type PartialUser = Partial<UserOmit>
function updateUser(user: UserOmit, updates: PartialUser): UserOmit{
    return {...user, ...updates}
}

const userPar: UserOmit = {
    name: "John",
    age: 20,
    email: "test@email.com",
    password: "password"
}
const updatedUser = updateUser(userPar, {password: "email@test.com"})
//required utility type is opposite of Partial utility type