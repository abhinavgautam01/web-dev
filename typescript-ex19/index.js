"use strict";
class User {
    constructor(name, email, lastname) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const userOne = new User("Golu", "golu@gmail.com");
const userTwo = new User("Gautam", "gautam@gmail.com");
const userThree = new User("Abhinav", "abhinav@gmail.com", "Gautam");
userOne.lastname = "abc";
console.log("userOne: ", userOne);
console.log("userOne.greet(): ", userOne.greet());
console.log("userTwo: ", userTwo);
console.log("userTwo.greet(): ", userTwo.greet());
console.log("userThree: ", userThree);
console.log("userThree.greet(): ", userThree.greet());
//inheritance
class Admin extends User {
    constructor(name, email, usersReporting, lastname) {
        super(name, email, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
}
const admin = new Admin("admin", "admin@gmail.com", 11, "hai");
console.log("admin: ", admin);
//super method
