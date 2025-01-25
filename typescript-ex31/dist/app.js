"use strict";
const user = AuthService.login("user", "password123");
if (AuthService.isLoggedIn()) {
    console.log("User is logged in");
}
else {
    console.log("Login failed");
}
const numbers = {
    x: 10,
    y: {
        z: 20,
    }
};
console.log((numbers));
numbers.x = 11;
console.log((numbers));
let firstNameField = document.getElementById("firstName");
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
