"use strict";
//generic function declarations...
//by this you can declare function for multiple types
const getFirstElement = (arr) => {
    return arr[0];
};
const numbersArray = [1, 23, 4, 5];
const stringArray = ["a", "v"];
let numberOutput = getFirstElement(numbersArray);
let stringOutput = getFirstElement(stringArray);
console.log("numberOutput: ", numberOutput);
console.log("stringOutput: ", stringOutput);
//by this you can declare function for specific type
//this is used when you want to write separate functions for each of type
const firstElement = (arr) => {
    return arr[0];
};
function logLength(item) {
    console.log("item.length: ", item.length);
}
logLength(numbersArray);
logLength(stringArray);
logLength("stringArray");
logLength({ name: "John", length: 12 });
//genric constraints are very useful when you want to narrow down your generics to a specific type...
