"use strict";
function timeStamp(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
        getTimeStamp() {
            return this.timestamp;
        }
    };
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class UserWithTimeStamp extends timeStamp(User) {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`TimeStamp: ${this.getTimeStamp()}`);
    }
}
const user = new UserWithTimeStamp("Golu", 20);
console.log("user: ", user);
console.log("----");
user.displayInfo();
