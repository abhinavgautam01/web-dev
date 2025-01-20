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