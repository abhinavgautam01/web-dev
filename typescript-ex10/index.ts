//defining function 
//named function
function intro(name: string, age: number, country?:string):string{
    //country is and optional parameter
    if(country){
        return `My name is ${name} and I am ${age} years old from ${country}`
    }
    return `My name is ${name} and I am ${age} years old`
}

//expression function
const intro2 = function (name:string, age:number): string{
    return `My name is ${name} and I am ${age} years old`
}

//arrow function
const intro3 = (name:string, age:number):string | number =>{ //can return union of string and number
    return `My name is ${name} and I am ${age} years old`//here it is only string
}

//optional parameters are declared after the default parameters only, cannot declare before default parameter
console.log("named function : ",intro("Golu",20,"India"));//country is optional
console.log("expression function : ",intro2("Golu",20));
console.log("arrow function : ",intro3("Golu",20));


//custom parameters and return types

enum AgeUnit{
    Years = "years",
    Months = "months"
}

type Person = {
    name: string
    age: number
    ageUnit?: AgeUnit
}

const person: Person = {
    name: "Scott",
    age: 20,
    ageUnit: AgeUnit.Years
}
function convertAgeToMonths(person: Person):Person{
    if(person.ageUnit === AgeUnit.Years){
        person.age = person.age * 12
        person.ageUnit = AgeUnit.Months
    }
    return person
}

console.log("person:",person);
console.log("person -> convertAgeToMonths: ",convertAgeToMonths(person));


//Function call signatures

type PersoN = {
    name: string
    age: number
    ageUnit?: AgeUnit
    //greet: Function; can also be written like this, but it is not strictly written
    greet: GreetingFunction //this is the function call signature
    //if function signature is set to be optional, then to fetch the result you have to check first whether it exist or not..! line -> 80
}
type GreetingFunction = (greeting:string/*, additionalParameter: any... */)=>string


const persoN: PersoN = {
    name: "Scott",
    age: 20,
    ageUnit: AgeUnit.Years,
    greet:(greeting)=>{
        return `${greeting} ${persoN.name}`
    }
}
console.log("persoN : ",persoN)
console.log("persoN.greet(): ",persoN.greet("Hello"));
// if (persoN.greet) {
//     console.log("persoN:", persoN.greet("Hello"));
// } else {
//     console.log("greet function is not defined.");
// }