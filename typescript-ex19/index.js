"use strict";
class User {
    constructor(name, email, lastname) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const userOne = new User("Golu", "golu@gmail.com");
const userTwo = new User("Gautam", "gautam@gmail.com");
const userThree = new User("Abhinav", "abhinav@gmail.com", "Gautam");
userOne.lastname = "abc";
console.log("userOne: ", userOne);
console.log("userOne.greet(): ", userOne.greet());
console.log("userTwo: ", userTwo);
console.log("userTwo.greet(): ", userTwo.greet());
console.log("userThree: ", userThree);
console.log("userThree.greet(): ", userThree.greet());
//inheritance
class Admin extends User {
    constructor(name, email, usersReporting, lastname) {
        super(name, email, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
}
const admin = new Admin("admin", "admin@gmail.com", 11, "hai");
console.log("admin: ", admin);
//super method
class Book {
    constructor(title, author, ISBN, yearPublished) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        if (yearPublished) {
            this.yearPublished = yearPublished;
        }
    }
}
const firstBook = new Book("FirstBook", "Golu", "123abc", 2024);
console.log("First Book: ", firstBook);
function logBookDetails(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`ISBN: ${book.ISBN}`);
    if (book.yearPublished) {
        console.log(`Year Published: ${book.title}`);
    }
}
logBookDetails(firstBook);
class EBook extends Book {
    constructor(title, author, ISBN, fileSize, format, yearPublished) {
        super(title, author, ISBN, yearPublished);
        this.fileSize = fileSize;
        this.format = format;
    }
}
const firstEBook = new EBook("NewEBook", "Golu", "123abc", 100, ".pdf", 2024);
function logEBookDetails(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`ISBN: ${book.ISBN}`);
    console.log(`FileSize: ${book.fileSize}kb`);
    console.log(`Format: ${book.format}`);
    if (book.yearPublished) {
        console.log(`Year Published: ${book.title}`);
    }
}
console.log(".....");
//logBookDetails also works as this function takes parameter as the base class of the argument passed, which means instance of child class can also be used ...
logBookDetails(firstEBook);
console.log(".....");
logEBookDetails(firstEBook);
console.log(".....");
