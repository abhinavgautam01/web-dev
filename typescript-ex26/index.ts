interface AutoMobile<Type, Brand, Colors> {
    type: Type
    brand: Brand
    colors: Colors[]
    description: string
}
interface CommercialVehicle{
    capacity: string
    licenseRenewalDate: Date
}

enum AutomobileTypes{
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike"
}

enum AutomobileBrand {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota"
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver"
}

class Truck implements AutoMobile<AutomobileTypes, AutomobileBrand, AutomobileColors>, CommercialVehicle{
    public type: AutomobileTypes = AutomobileTypes.truck
    constructor(public brand: AutomobileBrand, 
        public colors: AutomobileColors[], 
        public description: string,
        public capacity: string,
        public licenseRenewalDate: Date
    ){}
}

const truck: Truck = new Truck(AutomobileBrand.toyota, [AutomobileColors.black, AutomobileColors.white, AutomobileColors.silver], "This is a toyota Truck..!", "15 Tonnes", new Date())
console.log("---");
console.log("Truck: ", truck);

//declaration and merging
interface IUser{
    id: number
    name: string
}
interface IUser{
    password: string
}

class User implements IUser{
    constructor(public id: number, public name: string, public password: string){
        
    }
}
console.log("---");

const user: User = new User(1, "Golu", "abc123")
console.log("User:", user);

console.log("---");
//difference between custom types and interfaces
type typeUser = {
    name: string
}
// type AdminUser = typeUser &{
type AdminUser = {
    isAdmin: boolean
}
//Intersection Types
const userAndAdmin: typeUser & AdminUser = {
    name: "John",
    isAdmin: true
}
//Union types
const userOrAdmin: typeUser | AdminUser = {
    name: "Mark"
}
// Tuples
type ResponseTuple = [string, number]
//intersection and union types, tuples cannot be created using interfaces

interface name {
    name: string
}
interface LastName {
    lastName: string
}
//types cannot extend each other
// interface Person extends name, LastName{
// }
class Person implements name, LastName {
    constructor(public name: string, public lastName: string){

    }
}
const person: Person = {
    name: "Alice",
    lastName: "Doe"
}
console.log("person: ", person);
//abstract classes and interfaces
abstract class classPerson{
    public abstract name: string
    public abstract email: string
    public abstract phone: number

    public greeting(){
        console.log(`Hello ${this.name}`);
        
    }
}

class RegisteredPerson extends classPerson{
    constructor(public name: string, public email: string, public phone: number){
        super()
    }
}
const registeredPerson: RegisteredPerson = new RegisteredPerson("John", "john@gmail.com", 479382)
registeredPerson.greeting()
console.log(registeredPerson);

//interfaces do not contain implementation of properties or methods inside them...they just contain public properties that the instance of class must contain..!