//mixin functions can be used to explicitly add multiple functions to classes..!
type Constructor = new(...args: any[])=>{}
function timeStamp<T extends Constructor>(Base: T){
    return class extends Base{
        protected timestamp: Date = new Date()
        getTimeStamp(){
            return this.timestamp
        }
    }
}

class User {
    constructor(public name: string){}
}

class UserWithTimeStamp extends timeStamp(User){
    constructor(name: string, public age: number){
        super(name)
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`TimeStamp: ${this.getTimeStamp()}`);
    }
}

const user: UserWithTimeStamp = new UserWithTimeStamp("Golu", 20)
console.log("user: ", user);
console.log("----");
user.displayInfo();

class Employee{
    public static companyName: string = "Tech Solutions Inc."
    constructor(protected id: number, public name: string, private _salary: number, public age: number){}
    public set salary(salary: number){
        if(salary>0){
            this._salary = salary
        }
        else{
            throw new Error("Salary must be a positive number..!")
        }
    }
    public get salary(){
        return this._salary
    }
    public static getCompanyName(){
        return Employee.companyName
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`
    }
}
class Manager extends Employee{
    constructor(
        id: number,
        name: string,
        _salary: number,
        age: number,
        public department: string
    )
    {
        super(id, name, _salary, age)
        this.department = department
    }
    getDetails(): string{
        return `${super.getDetails()}, Department: ${this.department}`
    }
}
const emp = new Employee(1, "abc", 1234, 20)
console.log("---");
console.log("emp.getDetails(): ",emp.getDetails());
emp.salary = 12
console.log("emp.getDetails(): ",emp.getDetails());

const manager1 = new Manager(1, "abc", 1234, 20, "computer Science")
console.log("---");
console.log("manager1.getDetails(): ",manager1.getDetails());
