//parameter destructuring
type Numbers = {
    a: number
    b: number
    c: number
}

let numbers: Numbers = {
    a: 2,
    b: 3,
    c: 4
}

// function sum(numbers: Numbers):number{
//     return numbers.a+numbers.b+numbers.c
// }    lengthy way

//destructuring way
function sum({a, b, c}: Numbers):number{
    return a+ b+ c
}
console.log("sum(numbers) taking object as parameter: ",sum(numbers));
console.log("manually input values: ",sum({a:5, b:3, c:4}));

//function overloading
const str1 = "Hello, World"
const str2 = "github.com"
const part1 = str1.slice(7)
console.log("part1:", part1);
const part2 = str2.split('.')
console.log("part2:", part2[1]);

type Reservation = {
    departureDate: Date
    returnDate?: Date
    departingFrom: string
    destination: string
}
// type Reserve = (
//     departureDate: Date,
//     returnDate: Date,
//     departingFrom: string,
//     destination: string
// )=> Reservation
type Reserve = {
    (
        departureDate: Date,
        returnDate: Date,
        departingFrom: string,
        destination: string
    ): Reservation | never
    (
        departureDate: Date,
        departingFrom: string,
        destination: string
    ): Reservation | never
}

const reserve: Reserve = (
        departureDate: Date,
        returnDateOrDepartingFrom: Date | string,
        departingFromOrDestination: string,
        destination?: string
    )=>{
        if(returnDateOrDepartingFrom instanceof Date && destination ){
            return {
                departureDate: departureDate,
                returnDate: returnDateOrDepartingFrom,
                departingFrom: departingFromOrDestination,
                destination: destination
            }
        }
        else if(typeof returnDateOrDepartingFrom ==="string"){
            return {
                departureDate: departureDate,
                departingFrom: returnDateOrDepartingFrom,
                destination: departingFromOrDestination
            }
        }
        throw new Error("Please provide valid details to  reserve a ticket..!")
}

console.log("reserve function1: ",reserve(new Date(), new Date(), "India", "New York"));
console.log("reserve function2: ",reserve(new Date(), "India", "New York"));
