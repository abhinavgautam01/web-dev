"use strict";
class Admin {
    constructor(userName, email, adminLevel) {
        this.userName = userName;
        this.email = email;
        this.adminLevel = adminLevel;
    }
    login() {
        console.log("Admin is now logged in");
    }
}
class Customer {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }
    login() {
        console.log("Customer is now logged in");
    }
}
class Auth {
    static login(user) {
        user.login();
    }
}
const admin = new Admin("Golu", "golu@gmail.com", 1);
const customer = new Customer("John", "john@gmail.com");
Auth.login(admin);
Auth.login(customer);
const personWithAddress = {
    address: "Kullu",
    name: "Golu",
    age: 20,
    email: "golu@gmail.com",
    phone: 1234
};
console.log("personWithAddress: ", personWithAddress);
