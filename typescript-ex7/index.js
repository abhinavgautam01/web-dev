"use strict";
let airplane = [{
        model: "Airbus A380",
        flightNumber: "A2201",
        timeOfDeparture: new Date(),
        timeOfArrival: new Date(),
        caterer: {
            name: "Specia Food Ltd",
            address: "484, Some Street, New York",
            phone: 7895643728
        },
        seats: {
            A1: "John Doe",
            A2: "Mark Doe",
            A3: "Sam Doe"
        }
    }];
//...
//Arrays and enums...
let a = [1, 2, 3]; //array of numbers
let b = ["a", 'b', "ca", 'caa', 'c']; //array of strings
let c = ["a", 1]; //array of numbers & strings ...can also union boolean
console.log("airplane object : ", airplane);
