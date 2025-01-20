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
class Employee {
    constructor(id, name, _salary, age) {
        this.id = id;
        this.name = name;
        this._salary = _salary;
        this.age = age;
    }
    set salary(salary) {
        if (salary > 0) {
            this._salary = salary;
        }
        else {
            throw new Error("Salary must be a positive number..!");
        }
    }
    get salary() {
        return this._salary;
    }
    static getCompanyName() {
        return Employee.companyName;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}
Employee.companyName = "Tech Solutions Inc.";
class Manager extends Employee {
    constructor(id, name, _salary, age, department) {
        super(id, name, _salary, age);
        this.department = department;
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
const emp = new Employee(1, "abc", 1234, 20);
console.log("---");
console.log("emp.getDetails(): ", emp.getDetails());
emp.salary = 12;
console.log("emp.getDetails(): ", emp.getDetails());
const manager1 = new Manager(1, "abc", 1234, 20, "computer Science");
console.log("---");
console.log("manager1.getDetails(): ", manager1.getDetails());
