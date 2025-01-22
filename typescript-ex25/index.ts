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
    gender: string
    email: string
    phone: number
}

interface PersonWithAddress extends Person{
    address: string
}

const personWithAddress: PersonWithAddress = {
    address: "Kullu",
    name: "Golu",
    gender: "Male",
    email: "golu@gmail.com",
    phone: 1234
}
console.log("personWithAddress: ", personWithAddress);

enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor"
}
interface Role{
    role: Roles
}

enum PermissionList{
    read = "read",
    write = "write",
    execute = "execute"
}
interface UserPermissions{
    permissions: PermissionList[]
}

interface AdminUser extends Person, Role, UserPermissions{
    numberOfUsersReporting: number
}

const adminUser: AdminUser = {
    name: "Abhinav Gautam",
    gender: "Male",
    email: "abhinavgautam@gmail.com",
    phone: 9876,
    role: Roles.admin,
    permissions: [PermissionList.read, PermissionList.write, PermissionList.execute],
    numberOfUsersReporting: 2
}
console.log("adminUser: ", adminUser);

//interface with generics
interface AutoMobile<Type, Brand, Colors> {
    type: Type
    brand: Brand
    colors: Colors[]
    description: string
}
interface CommercialVehicle{
    capacity: string
    licenseRenewalDate: Date
}

enum AutomobileTypes{
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike"
}

enum AutomobileBrand {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota"
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver"
}

const ferrari: AutoMobile<AutomobileTypes, AutomobileBrand, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrand.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a ferrari"
}
const honda: AutoMobile<string, string, string>={
    type: "car",
    brand: "Honda",
    colors: ["silver","black"],
    description: "this is a Honda"
}
const toyota: AutoMobile<string, AutomobileBrand, number>={
    type: "car",
    brand: AutomobileBrand.honda,
    colors: [6678, 2234],
    description: "this is a Toyota"
}
console.log("---");
console.log("ferrari: ", ferrari);
console.log("honda: ", honda);
console.log("toyota: ", toyota);
console.log("---");

class Car implements AutoMobile<string, AutomobileBrand, AutomobileColors>{
    public type: string = "car"
    constructor(public brand: AutomobileBrand, public colors: AutomobileColors[], public description: string){

    }
}

const newFerrari: Car = new Car(AutomobileBrand.ferrari, [AutomobileColors.red, AutomobileColors.black], "This is new ferrari")
console.log("newFerrari:", newFerrari);

class Truck implements AutoMobile<AutomobileTypes, AutomobileBrand, AutomobileColors>, CommercialVehicle{
    public type: AutomobileTypes = AutomobileTypes.truck
    constructor(public brand: AutomobileBrand, 
        public colors: AutomobileColors[], 
        public description: string,
        public capacity: string,
        public licenseRenewalDate: Date
    ){}
}

const truck: Truck = new Truck(AutomobileBrand.toyota, [AutomobileColors.black, AutomobileColors.white, AutomobileColors.silver], "This is a toyota Truck..!", "15 Tonnes", new Date())
console.log("---");
console.log("Truck: ", truck);
