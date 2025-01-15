"use strict";
//access modifiers...!
//by default public
class User {
    constructor(name, email, phone, lastName) {
        this.name = name;
        this.email = email;
        this.lastName = lastName;
        this.phone = phone;
    }
    greet() {
        return `Hello ${this.name}`;
    }
    printPhone() {
        console.log(this.phone);
    }
}
const user = new User("Golu", "golu@gmail.com", 1234);
console.log("User: ", user);
console.log(user.greet());
class Admin extends User {
    constructor(name, email, phone, userReporting, lastName) {
        super(name, email, phone, lastName);
        this.isAdmin = true;
        this.userReporting = userReporting;
    }
    printName() {
        console.log(this.name);
    }
    greet() {
        return `Hello ${this.name}. AdminAcount...!`;
    }
}
const adminUser = new Admin("Abhinav", "abhinav@gmail.com", 8291, 3, "Gautam");
console.log("Admin: ", adminUser);
console.log("----");
adminUser.printName();
console.log("----");
console.log(user.name);
//protected members..!
console.log("----");
console.log("phone: ");
// adminUser.useProtectedPhone()
user.printPhone();
console.log(adminUser.greet());
