import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
  });    // wee can use -> to give name for collection,otherwise it will pluralise the name of database...! : },{ collection: 'todo' });// Specify collection name);
  
export const Todo = mongoose.model('Todo', TodoSchema);