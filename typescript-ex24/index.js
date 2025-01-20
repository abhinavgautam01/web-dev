"use strict";
//abstract classes cannot be instantiated...
class Department {
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
class ItDepartment extends Department {
    constructor() {
        super("IT Department");
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log("There are no Holidays..!");
        }
        console.log(`Here is the list of holidays ${this.name}: `);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. ${holiday.date}, ${holiday.reason}`);
        });
    }
}
class AdminDepartment extends Department {
    constructor() {
        super("Admin Department");
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log("There are no Holidays..!");
        }
        console.log(`Here is the list of holidays ${this.name}: `);
        this.holidays.forEach((holiday, index) => {
            console.log(`${index + 1}. ${holiday.date}, ${holiday.reason}`);
        });
    }
}
const itHolidays = [{
        date: new Date(2025, 3, 25),
        reason: "IT Department Day"
    }, {
        date: new Date(2025, 11, 25),
        reason: "Christmas Day"
    }];
const adminHolidays = [{
        date: new Date(2025, 1, 20),
        reason: "Admin Department Day"
    }, {
        date: new Date(2025, 11, 25),
        reason: "Christmas Day"
    }];
const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);
// console.log("itdept: ", itDepartment);
// console.log("admindept: ", adminDepartment);
itDepartment.printHolidays();
console.log("---");
adminDepartment.printHolidays();
