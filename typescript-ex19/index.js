"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const userOne = new User("Golu", "golu@gmail.com");
const userTwo = new User("Gautam", "gautam@gmail.com");
console.log("userOne: ", userOne);
console.log("userOne.greet(): ", userOne.greet());
console.log("userTwo: ", userTwo);
console.log("userTwo.greet(): ", userTwo.greet());
