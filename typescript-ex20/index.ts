//access modifiers...!

//by default public
class User{
    public name: string
    readonly email: string
    lastName?: string
    protected phone: number

    constructor(name: string, email: string, phone:number, lastName?: string){
        this.name = name
        this.email = email
        this.phone = phone
        if(lastName){
            this.lastName = lastName
        }
    }
    public greet(){
        return `Hello ${this.name}`
    }
}
const user: User = new User("Golu", "golu@gmail.com", 1234)
console.log("User: ", user);

class Admin extends User{
    isAdmin: boolean = true
    userReporting: number
    constructor(name: string, email: string, phone:number, userReporting: number, lastName?: string){
        super(name, email, phone, lastName)
        this.userReporting = userReporting
    }
    public printName(){
        console.log(this.name);
    }
    protected printPhone(){
        console.log(this.phone);
    }
    public useProtectedPhone(){
        this.printPhone()
    }
}

const adminUser: Admin = new Admin("Abhinav", "abhinav@gmail.com", 8291, 3, "Gautam")
console.log("Admin: ", adminUser);
console.log("----");
adminUser.printName()
console.log("----");
console.log(user.name);

//protected members..!
console.log("----");
console.log("phone: ");
adminUser.useProtectedPhone()
