"use strict";
//generic with classes
class box {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const numberBox = new box(123);
const stringBox = new box("abc");
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getById(id) {
        return this.items.find((item) => item.id === id);
    }
    getAll() {
        return this.items;
    }
    removeById(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
const usersRepository = new Repository();
usersRepository.add({
    id: 1,
    name: "Golu",
    email: "golu@gmail.com",
});
usersRepository.add({
    id: 2,
    name: "Abhinav",
    email: "abhinav@gmail.com",
});
usersRepository.add({
    id: 3,
    name: "Gautam",
    email: "Gautam@gmail.com",
});
console.log("----");
console.log("usersRepository.getAll(): ", usersRepository.getAll());
console.log("----");
console.log("usersRepository.getById(1): ", usersRepository.getById(1));
console.log("----");
usersRepository.removeById(3);
console.log("usersRepository.getAll(): ", usersRepository.getAll());
console.log("----");
const booksRepository = new Repository();
booksRepository.add({
    id: 1,
    title: "Harry Potter",
    ISBN: 1234
});
console.log("booksRepository.getById(1): ", booksRepository.getById(1));
