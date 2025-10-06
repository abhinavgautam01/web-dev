const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
})

const AdminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
})

const CourseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId
})

const PurchasesSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId 
})

const UserModel = mongoose.model("users", UserSchema)
const AdminModel = mongoose.model("admin", AdminSchema)
const CourseModel = mongoose.model("courses", CourseSchema)
const PurchasesModel = mongoose.model("purchases", PurchasesSchema)

module.exports = {
    UserModel: UserModel,
    AdminModel: AdminModel,
    CourseModel: CourseModel,
    PurchasesModel: PurchasesModel,
}