//...Exercise
type Caterer = {
    name:string
    address:string
    phone:number
}
type Seats = {
    // A1:string
    // A2:string
    // A3:string
    [keyof:string]:string
}
type Airplane ={
    model:string
    flightNumber:string
    timeOfDeparture:Date
    timeOfArrival:Date
    caterer:Caterer
    seats:Seats
}
type Airplanes = Airplane[]//array of objects

let airplane: Airplanes = [{
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name:"Specia Food Ltd",
        address:"484, Some Street, New York",
        phone:7895643728
    },
    seats: {
        A1:"John Doe",
        A2:"Mark Doe",
        A3:"Sam Doe"
    }
}]
//...


//Arrays and enums...
let a: number[] = [1, 2, 3]//array of numbers
let b: Array<string> = ["a",'b',"ca",'caa','c']//array of strings
let c:(string|number)[] = ["a", 1]//array of numbers & strings ...can also union boolean

console.log("airplane object : ",airplane)