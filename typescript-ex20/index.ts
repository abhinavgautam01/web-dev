//access modifiers...!

//by default public
class User{
    // protected phone: number
    private phone: number

    constructor(
        public name: string,
        readonly email: string,
        phone:number,
        public lastName?: string){
        this.phone = phone
    }
    public greet(): string{
        return `Hello ${this.name}`
    }
    public printPhone(){
        console.log(this.phone);
    }
}
const user: User = new User("Golu", "golu@gmail.com", 1234)
console.log("User: ", user);
console.log(user.greet());

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
    public greet(): string{
        return `Hello ${this.name}. AdminAcount...!`
    }
    // protected printPhone(){
    //     console.log(this.phone);
    // }
    // public useProtectedPhone(){
    //     this.printPhone()
    // }
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
// adminUser.useProtectedPhone()
user.printPhone()
console.log(adminUser.greet());
