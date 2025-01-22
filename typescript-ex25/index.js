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
    gender: "Male",
    email: "golu@gmail.com",
    phone: 1234
};
console.log("personWithAddress: ", personWithAddress);
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
var PermissionList;
(function (PermissionList) {
    PermissionList["read"] = "read";
    PermissionList["write"] = "write";
    PermissionList["execute"] = "execute";
})(PermissionList || (PermissionList = {}));
const adminUser = {
    name: "Abhinav Gautam",
    gender: "Male",
    email: "abhinavgautam@gmail.com",
    phone: 9876,
    role: Roles.admin,
    permissions: [PermissionList.read, PermissionList.write, PermissionList.execute],
    numberOfUsersReporting: 2
};
console.log("adminUser: ", adminUser);
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
const ferrari = {
    type: AutomobileTypes.car,
    brand: AutomobileBrand.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a ferrari"
};
const honda = {
    type: "car",
    brand: "Honda",
    colors: ["silver", "black"],
    description: "this is a Honda"
};
const toyota = {
    type: "car",
    brand: AutomobileBrand.honda,
    colors: [6678, 2234],
    description: "this is a Toyota"
};
console.log("---");
console.log("ferrari: ", ferrari);
console.log("honda: ", honda);
console.log("toyota: ", toyota);
console.log("---");
class Car {
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = "car";
    }
}
const newFerrari = new Car(AutomobileBrand.ferrari, [AutomobileColors.red, AutomobileColors.black], "This is new ferrari");
console.log("newFerrari:", newFerrari);
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
