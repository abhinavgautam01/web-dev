//access modifiers...!

//by default public
class User{
    public name: string
    readonly email: string
    lastName?: string

    constructor(name: string, email: string, lastName?: string){
        this.name = name
        this.email = email
        if(lastName){
            this.lastName = lastName
        }
    }
    public greet(){
        return `Hello ${this.name}`
    }
}
const user: User = new User("Golu", "golu@gmail.com")
console.log("User: ", user);

class Admin extends User{
    isAdmin: boolean = true
    userReporting: number
    constructor(name: string, email: string, userReporting: number, lastName?: string){
        super(name, email, lastName)
        this.userReporting = userReporting
    }
    public printName(){
        console.log(this.name);
    }
}

const adminUser: Admin = new Admin("Abhinav", "abhinav@gmail.com", 3, "Gautam")
console.log("Admin: ", adminUser);
console.log("----");
adminUser.printName()
console.log("----");
console.log(user.name);