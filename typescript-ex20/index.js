"use strict";
//access modifiers...!
//by default public
class User {
    constructor(name, email, lastName) {
        this.name = name;
        this.email = email;
        if (lastName) {
            this.lastName = lastName;
        }
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const user = new User("Golu", "golu@gmail.com");
console.log("User: ", user);
class Admin extends User {
    constructor(name, email, userReporting, lastName) {
        super(name, email, lastName);
        this.isAdmin = true;
        this.userReporting = userReporting;
    }
    printName() {
        console.log(this.name);
    }
}
const adminUser = new Admin("Abhinav", "abhinav@gmail.com", 3, "Gautam");
console.log("Admin: ", adminUser);
console.log("----");
adminUser.printName();
console.log("----");
console.log(user.name);
