/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('first_database');

// Insert a few documents into the sales collection.
db.getCollection('students').insertMany([
    { 'name': 'Alice', 'rollNumber': 101, 'marks': 85 },
    { 'name': 'Bob', 'rollNumber': 102, 'marks': 78 },
    { 'name': 'Charlie', 'rollNumber': 103, 'marks': 92 },
    { 'name': 'David', 'rollNumber': 104, 'marks': 88 },
    { 'name': 'Eve', 'rollNumber': 105, 'marks': 74 },
    { 'name': 'Frank', 'rollNumber': 106, 'marks': 67 },
    { 'name': 'Grace', 'rollNumber': 107, 'marks': 90 },
    { 'name': 'Heidi', 'rollNumber': 108, 'marks': 81 },
    { 'name': 'Ivan', 'rollNumber': 109, 'marks': 76 },
    { 'name': 'Judy', 'rollNumber': 110, 'marks': 89 }
  ]
  );

console.log(`First database created successfully...!`);
