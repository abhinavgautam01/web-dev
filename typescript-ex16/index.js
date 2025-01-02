"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//generics with objects
let stringNumberPair = {
    key: "age",
    value: 30
};
let numberArrayPair = {
    key: 1234,
    value: ["a"]
};
function printId(obj) {
    console.log(obj.id);
}
const user = {
    id: 1234,
    name: "Golu"
};
printId(user);
const product = {
    id: 12,
    name: "Laptop"
};
printId(product);
let idOfEvent = "id";
let dateofEvent = "date";
let stringObject = {
    0: "First",
    second: "Second"
};
console.log("stringObject[0]: ", stringObject["0"]);
let partial = {
    name: "Golu"
};
//generic default values
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
// console.log("fetched data: ", fetchData("https://jsonplaceholder.typicode.com/posts/1"));
function fetchDefault() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData("https://jsonplaceholder.typicode.com/posts/1");
        console.log("fetchDefault: ", data);
    });
}
fetchDefault();
function fetchPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield fetchData("https://jsonplaceholder.typicode.com/posts/1");
        console.log("fetchPost: ", post);
    });
}
fetchPost();
//implementing a polymorphic function...
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
