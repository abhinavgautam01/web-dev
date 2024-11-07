//Crud : (Create Read Update Delete) operations...!
use ("CrudDb")
console.log(db)
// db.createCollection("info")
// db.info.insertOne({
//     name:"Abhinav",
//     from:"Himachal Pradesh",
//     phNo:"8210000001"
// })
// db.info.insertMany(
//     [
//         {
//             "name": "Rohit",
//             "from": "Uttar Pradesh",
//             "phNo": "8210000002"
//         },
//         {
//             "name": "Sanya",
//             "from": "Maharashtra",
//             "phNo": "8210000003"
//         },
//         {
//             "name": "Aman",
//             "from": "Karnataka",
//             "phNo": "8210000004"
//         },
//         {
//             "name": "Neha",
//             "from": "Rajasthan",
//             "phNo": "8210000005"
//         },
//         {
//             "name": "Vikram",
//             "from": "Punjab",
//             "phNo": "8210000006"
//         }
//     ]
    
// )


// let a = db.info.find({from:"Himachal Pradesh"})
// console.log(a.toArray())

let b = db.info.findOne({from:"Himachal Pradesh"})
console.log(b)

//update
db.info.updateOne({from:"Himachal Pradesh"}, {$set:{from:"Kullu"}})

db.info.updateMany({from:"Punjab"}, {$set:{from:"Haryana"}})


let c = db.info.find({from:"Kullu"})
console.log(c.count())
console.log(c.toArray())

let d = db.info.find({from:"Haryana"})
console.log(d.count())
console.log(d.toArray())

//delete
db.info.deleteMany({from:"Maharashtra"})
// db.info.deleteMany({from:"Kullu"})

// db.info.deleteOne({name:"Abhinav"})
db.info.deleteOne({name:"Golu"})


//https://www.mongodb.com/docs/manual/reference/operator/query/