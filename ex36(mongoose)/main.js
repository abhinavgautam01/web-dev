//npm i mongodb...

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
// console.log(conn)

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo= new Todo({title:"Hey first todo", desc:"Description of first todo", isDone:"false", days:5})
    todo.save()
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})