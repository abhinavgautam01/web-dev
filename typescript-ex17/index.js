"use strict";
//instead of creating types for function overload as above... you can use generics like below..!
const filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function predicate(item) {
    return item > 7;
}
let animals = ["cat", "dog", "rat"];
function filterCat(item) {
    return item === "cat";
}
console.log("filter(numbers, predicate):", filter(numbers, predicate));
console.log("filter(animals, filterCat):", filter(animals, filterCat));
