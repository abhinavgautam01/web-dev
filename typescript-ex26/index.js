"use strict";
var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["bus"] = "bus";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["bike"] = "bike";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrand;
(function (AutomobileBrand) {
    AutomobileBrand["ferrari"] = "ferrari";
    AutomobileBrand["honda"] = "honda";
    AutomobileBrand["bmw"] = "bmw";
    AutomobileBrand["toyota"] = "toyota";
})(AutomobileBrand || (AutomobileBrand = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["white"] = "white";
    AutomobileColors["black"] = "black";
    AutomobileColors["silver"] = "silver";
})(AutomobileColors || (AutomobileColors = {}));
class Truck {
    constructor(brand, colors, description, capacity, licenseRenewalDate) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
        this.type = AutomobileTypes.truck;
    }
}
const truck = new Truck(AutomobileBrand.toyota, [AutomobileColors.black, AutomobileColors.white, AutomobileColors.silver], "This is a toyota Truck..!", "15 Tonnes", new Date());
console.log("---");
console.log("Truck: ", truck);
class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
}
console.log("---");
const user = new User(1, "Golu", "abc123");
console.log("User:", user);
console.log("---");
//Intersection Types
const userAndAdmin = {
    name: "John",
    isAdmin: true
};
//Union types
const userOrAdmin = {
    name: "Mark"
};
//types cannot extend each other
// interface Person extends name, LastName{
// }
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
const person = {
    name: "Alice",
    lastName: "Doe"
};
console.log("person: ", person);
//abstract classes and interfaces
class classPerson {
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
class RegisteredPerson extends classPerson {
    constructor(name, email, phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
const registeredPerson = new RegisteredPerson("John", "john@gmail.com", 479382);
registeredPerson.greeting();
console.log(registeredPerson);
//interfaces do not contain implementation of properties or methods inside them...they just contain public properties that the instance of class must contain..!
