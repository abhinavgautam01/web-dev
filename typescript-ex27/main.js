//method - > object
//function -> window, global

const book = {
    title: "This is the Title",
    authors: ["John", "Mark", "Rob"],
    read(){
        console.log(this);
    },
    // printAuthors(){
    //     this.authors.forEach(function(author){
    //         console.log(this.title, "-", author);
    //     },this)
    // },
    printAuthors(){
        this.authors.forEach((author)=>{
            console.log(this.title, "-", author);
        })
    },
    printTitle(){
        console.log(this.title);
    }
}
book.stopReading = function (){
    console.log(this);
}
book.read()
book.stopReading()

function watchmovie(){
    console.log(this);
}
watchmovie()
console.log("---");
book.printAuthors()
console.log("---");
book.printTitle()


// class User {
//     constructor(name, email){
//         this.name = name
//         this.email = email
//         this.points = 0
//     }
//     login(){
//         console.log(this.name, "Has logged in");
//     }
//     logout(){
//         console.log(this.name, "Has logged out");
//     }
//     addPoint(){
//         this.points++
//         console.log("Total Points: ", this.points);
//     }
// }
// const user1 = new User("John", "john@gmail.com")
// const user2 = new User("Mark", "mark@gmail.com")
// console.log("---");
// console.log(user1);
// user2.addPoint()
// console.log(user2);

function User (name, email){
    this.name = name
    this.email = email
    this.points = 0
}
User.prototype.login = function(){
    console.log("User has logged in");
}
User.prototype.logout = function(){
    console.log("User has logged out");
}
User.prototype.addPoint = function(){
    this.points++
    console.log("Total Points: ", this.points);
}

function AdminUser(name, email, peopleReporting){
    User.apply(this, [name, email])
    this.peopleReporting = peopleReporting
}
AdminUser.prototype = Object.create(User.prototype)
AdminUser.prototype.updatePeopleReporting = function(newNumber){
    this.peopleReporting = newNumber
}
const user = new User("John", "john@gmail.com")
const admin = new AdminUser("Mark", "mark@gmail.com", 10)
console.log(admin);
console.log(user);

const book2 = {
    title: "the title",
    pages: 300,
    author: "John"
}
//property descriptors...value, writable(boolean), enumerable|loopable(boolean), configurable(boolean)

const book3 = new Object()
Object.defineProperty(book3, "title", 
    {
        value: "This is the title of the book",
        writeable: true,
        enumerable: true,
        configurable: true
    })
Object.defineProperty(book3, "author", 
    {
        value: "Golu",
        writeable: false,
        enumerable: true,
        configurable: true
    })
book3.author = "John"
console.log(book3);


console.log(Object.getOwnPropertyDescriptors(book2));
