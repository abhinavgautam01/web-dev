"use strict";
//defining function 
//named function
function intro(name, age, country) {
    //country is and optional parameter
    if (country) {
        return `My name is ${name} and I am ${age} years old from ${country}`;
    }
    return `My name is ${name} and I am ${age} years old`;
}
//expression function
const intro2 = function (name, age) {
    return `My name is ${name} and I am ${age} years old`;
};
//arrow function
const intro3 = (name, age) => {
    return `My name is ${name} and I am ${age} years old`; //here it is only string
};
//optional parameters are declared after the default parameters only, cannot declare before default parameter
console.log("named function : ", intro("Golu", 20, "India")); //country is optional
console.log("expression function : ", intro2("Golu", 20));
console.log("arrow function : ", intro3("Golu", 20));
//custom parameters and return types
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person = {
    name: "Scott",
    age: 20,
    ageUnit: AgeUnit.Years
};
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
console.log("person:", person);
console.log("person -> convertAgeToMonths: ", convertAgeToMonths(person));
const persoN = {
    name: "Scott",
    age: 20,
    ageUnit: AgeUnit.Years,
    greet: (greeting) => {
        return `${greeting} ${persoN.name}`;
    }
};
console.log("persoN : ", persoN);
console.log("persoN.greet(): ", persoN.greet("Hello"));
// if (persoN.greet) {
//     console.log("persoN:", persoN.greet("Hello"));
// } else {
//     console.log("greet function is not defined.");
// }
