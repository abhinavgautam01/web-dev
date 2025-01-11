class User {
    name: string
    readonly email: string
    lastname?: string
    constructor(name: string, email: string, lastname?: string) {
        this.name = name
        this.email = email
        this.lastname = lastname
    }
    greet(){
        return `Hello ${this.name}`
    }
}
const userOne = new User("Golu", "golu@gmail.com")
const userTwo = new User("Gautam", "gautam@gmail.com")
const userThree = new User("Abhinav", "abhinav@gmail.com", "Gautam")
userOne.lastname = "abc"

console.log("userOne: ",userOne);
console.log("userOne.greet(): ",userOne.greet());
console.log("userTwo: ",userTwo);
console.log("userTwo.greet(): ",userTwo.greet());
console.log("userThree: ",userThree);
console.log("userThree.greet(): ",userThree.greet());

//inheritance
class Admin extends User {
    isAdmin: boolean = true
    usersReporting: number
    constructor(name: string, email: string, usersReporting: number, lastname?: string){
        super(name, email, lastname)
        this.usersReporting = usersReporting
    }
}
const admin: Admin = new Admin("admin", "admin@gmail.com", 11, "hai",)
console.log("admin: ", admin);

//super method


class Book {
    title: string
    author: string
    yearPublished?: number
    readonly ISBN: string
    constructor(title: string, author: string, ISBN: string, yearPublished?: number){
        this.title = title
        this.author = author
        this.ISBN = ISBN
        if(yearPublished){
            this.yearPublished = yearPublished
        }
    }
}
const firstBook: Book = new Book("FirstBook", "Golu", "123abc", 2024)
console.log("First Book: ", firstBook);

function logBookDetails(book: Book):void{
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`ISBN: ${book.ISBN}`);
    if(book.yearPublished){
        console.log(`Year Published: ${book.title}`);
    }
}
logBookDetails(firstBook)

class EBook extends Book{
    fileSize: number
    format: string
    constructor(title: string, author: string, ISBN: string, fileSize: number, format: string, yearPublished?: number){
        super(title, author, ISBN, yearPublished)
        this.fileSize = fileSize
        this.format = format
    }
}
const firstEBook: EBook = new EBook("NewEBook", "Golu", "123abc", 100, ".pdf", 2024)
function logEBookDetails(book: EBook):void{
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`ISBN: ${book.ISBN}`);
    console.log(`FileSize: ${book.fileSize}kb`);
    console.log(`Format: ${book.format}`);
    
    if(book.yearPublished){
        console.log(`Year Published: ${book.title}`);
    }
}
console.log(".....");
//logBookDetails also works as this function takes parameter as the base class of the argument passed, which means instance of child class can also be used ...
logBookDetails(firstEBook)
console.log(".....");
logEBookDetails(firstEBook)
console.log(".....");