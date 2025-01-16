"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (age > 200 || age < 1) {
            throw new Error("The age must be within age range 0-200");
        }
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person("Abhinav", "Gautam", 20);
console.log("person.fullName() :", person.fullName());
