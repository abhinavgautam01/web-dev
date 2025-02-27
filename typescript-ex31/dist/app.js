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
function person(name, age) {
    return {
        name: name,
        age: age
    };
}
const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0]
};
const redComponent = color.red[0];
console.log(redComponent);
const greenValue = color.green.toUpperCase();
console.log(greenValue);
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Done!");
    }, 1000);
});
const article = {
    title: "Title",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae nulla fuga.",
    contributors: {
        author: { name: "John", email: "john@email.com", age: 32 },
        editor: { name: "Frank", email: "frank@email.com", age: 20 },
        researcher: { name: "Mark", email: "mark@email.com", age: 23 },
    }
};
const personOne = {
    name: "Golu",
    age: 20
};
const limitedUser = {
    name: "John",
    email: "john@gmail.com"
};
function updateUser(user, updates) {
    return { ...user, ...updates };
}
const userPar = {
    name: "John",
    age: 20,
    email: "test@email.com",
    password: "password"
};
const updatedUser = updateUser(userPar, { password: "email@test.com" });
//required utility type is opposite of Partial utility type
