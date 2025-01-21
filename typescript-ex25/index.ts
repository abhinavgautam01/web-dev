//interfaces...
interface User{
    userName: string
    email: string
    login(): void
}
class Admin implements User{
    constructor(public userName: string, public email: string, public adminLevel: number){}
    login(): void {
        console.log("Admin is now logged in");
    }
}
class Customer implements User{
    constructor(public userName: string, public email: string){}
    login(): void {
        console.log("Customer is now logged in");
    }
}
class Auth{
    public static login(user: User){
        user.login()
    }
}
const admin: Admin = new Admin("Golu", "golu@gmail.com", 1)
const customer: Customer = new Customer("John", "john@gmail.com")
Auth.login(admin)
Auth.login(customer)
interface Person{
    name: string
    age: number
    email: string
    phone: number
}

interface PersonWithAddress extends Person{
    address: string
}

const personWithAddress: PersonWithAddress = {
    address: "Kullu",
    name: "Golu",
    age: 20,
    email: "golu@gmail.com",
    phone: 1234
}
console.log("personWithAddress: ", personWithAddress);
