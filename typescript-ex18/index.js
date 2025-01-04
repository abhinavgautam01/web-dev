"use strict";
const map = (array, func) => {
    if (array.length === 0) {
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
};
let numbers = [4, 5, 6, 7, 8, 9];
const converted = map(numbers, (num) => num.toString());
console.log("numnbers[]: ", numbers);
console.log("converted: ", converted);
