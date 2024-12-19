//Lecture 34
let person = {
    name:"Golu",
    age:32
}

let car:Object = {
    brand : "BMW",
    color : "Black"
}

//we don't want this type of behavior
car = []
car = ()=>{}

let newCar:{//stricter type...newCar should have only two properties...!
    brand:string
    color:string
} = {   //object literal : {}    and  object are same...!
    brand : "BMW",
    color : "Black"
}
// newCar=[]
// newCar=()=>{}



// let post:{
//     title: string
//     content:string
//     date: Date

// } = {
//     title: "This is a blog post...!",
//     content: "Content of this post",
//     date: new Date()
// }


type Author = {
    name:string
    age:number
    email:string
    readonly type: "human" | "ai"
}

type AwardDetails ={
    name:string
    date:Date
}

type Awards = {
    [key:string]:AwardDetails
}

type Post = {
    title: string
    content: string
    date: Date
//     author:{        //nested objects
//         name:string
//         age:number
//         email:string
//     }
    author:Author
    awards:Awards
    category?:string    //by putting ? after the property name you can set it as optional
}
//by using type aliases, you don't have to declare type, you can use the same type aliase name for different objects...
let post:Post = {
    title: "This is a blog post...!",
    content: "Content of this post",
    category: "this is the category",
    date: new Date(),
    author:{
        name:"Golu",
        age:20,
        email:"golu@gmial.com",
        type:"human"
    },
    awards:{
        web:{
            name:"Web program",
            date: new Date
        },
        web3:{
            name:"Web3 program",
            date: new Date
        }
    }
}
console.log("post : ",post)
post.author.name="Abhinav"
// post.author.type="ai"    it will give us an error as read only property cannot be overwrite once written..!
console.log("post : ",post)
