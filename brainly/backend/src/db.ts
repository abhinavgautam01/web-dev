import mongoose, {model, Schema} from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGODB_URI!);
const ObjectId = Schema.Types.ObjectId

const User = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const Tags = new Schema({
    title: {type: String, required: true, unique: true}
})

const Links = new Schema({
    hash: {type: String, required: true},
    user_id: {type: ObjectId, ref: "users", required: true}
})

const contentTypes = ["text", "image", "video", "audio", "article"]

const Content = new Schema({
    link: {type: String, required: true},
    type: {type: String, enum: contentTypes, required: true},
    title: {type: String, required: true},
    tags: [{type: ObjectId, ref: "tags"}],
    user_id: {type: ObjectId, ref: "users"}
})

export const UserModel = model("users", User);
export const TagsModel = model("tags", Tags);
export const LinksModel = model("links", Links);
export const ContentModel = model("content", Content);