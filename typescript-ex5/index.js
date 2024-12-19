"use strict";
//Lecture 34
let person = {
    name: "Golu",
    age: 32
};
let car = {
    brand: "BMW",
    color: "Black"
};
//we don't want this type of behavior
car = [];
car = () => { };
let newCar = {
    brand: "BMW",
    color: "Black"
};
//by using type aliases, you don't have to declare type, you can use the same type aliase name for different objects...
let post = {
    title: "This is a blog post...!",
    content: "Content of this post",
    category: "this is the category",
    date: new Date(),
    author: {
        name: "Golu",
        age: 20,
        email: "golu@gmial.com",
        type: "human"
    },
    awards: {
        web: {
            name: "Web program",
            date: new Date
        },
        web3: {
            name: "Web3 program",
            date: new Date
        }
    }
};
console.log("post : ", post);
post.author.name = "Abhinav";
// post.author.type="ai"    it will give us an error as read only property cannot be overwrite once written..!
console.log("post : ", post);
