"use strict";
const user = AuthService.login("user", "password123");
if (AuthService.isLoggedIn()) {
    console.log("User is logged in");
}
else {
    console.log("Login failed");
}
const numbersObject = {
    x: 10,
    y: {
        z: 20,
    }
};
console.log((numbersObject));
numbersObject.x = 11;
console.log((numbersObject));
let firstNameField = document.getElementById("firstName");
console.log("------");
//concept of totality
function nextDayForAWeekDay(weekday) {
    switch (weekday) {
        case "Mon":
            return "Tue";
        case "Tue":
            return "Wed";
        case "Wed":
            return "Thu";
        case "Thu":
            return "Fri";
        case "Fri":
            return "Sat";
    }
}
function fetchUserDetails(name) {
    return new Promise((res, rej) => {
        if (name) {
            res({
                id: 23,
                name: "John",
                serviceList: {
                    count: 2,
                    services: [{
                            id: 1,
                            name: "service1",
                            price: 123
                        }, {
                            id: 2,
                            name: "service2",
                            price: 321
                        }]
                }
            });
        }
        else
            rej(new Error("Pass new a valid name"));
    });
}
function printServiceList(services) {
    console.log(services);
}
fetchUserDetails("John").then((res) => {
    console.log(res);
    printServiceList(res.serviceList);
}).catch((err) => {
    console.log(err);
});
let greeting = "Hello world";
let firstName;
const user1 = {
    name: "John",
    age: 32
};
let tom;
tom = {
    name: "Tom",
    age: 22
};
let numbers = [1, 5, 6, 8, 10];
let stringNumbers = numbers.map((each) => each.toString());
console.log("stringNumbers: ", stringNumbers);
let nextDay = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat"
};
const artist = {
    id: 1,
    name: "Justin",
    bio: "Hey, I am Justin"
};
const editedAritst = {
    id: 1,
    bio: "Hello, I am Justin"
};
function returnString() {
    return "string";
}
