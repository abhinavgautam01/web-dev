"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //setter or mutator
    set age(age) {
        if (age > 200 || age < 1) {
            throw new Error("The age must be within age range 0-200");
        }
        this._age = age;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person = new Person("Abhinav", "Gautam");
console.log("person.fullName() :", person.fullName());
person.age = 40;
console.log(person.age);
