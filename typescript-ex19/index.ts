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
