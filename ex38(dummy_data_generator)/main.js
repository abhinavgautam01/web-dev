// Generate a dummy data in this format in a collection called employees in a db called company

// { // name: "Golu", // salary: 45000000, // language: "Python", // city: "New York", // isManager: true // }

// Generate 10 such records when a button called generate data is clicked! // Create an Express app with mongoose to acheive it // Everytime the button is clicked, you should clear the collection


const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
//schema of databse -> models
const Employee = require("./models/Employee")

conn = mongoose.connect('mongodb://localhost:27017/company');

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
    //render pages mathcing with the bootsrtrap template(like ejs), which are inside views folder
})

app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({}) 
    // Generate random data

    let randomNames = ['Golu', "Abhinav", "Gautam", "abc"]
    let randomLang = ["php", "java", "C", "JavaScript"]
    let randomCities = ["Kullu", "kangra", "assam", "Kolkata"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})