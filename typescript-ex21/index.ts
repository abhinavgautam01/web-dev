class Person{
    private _age?: number
    constructor(
        public firstName: string,
        public lastName: string,
    ){
    }
    
    //setter or mutator
    public set age(age: number){
        if(age>200 || age <1){
            throw new Error("The age must be within age range 0-200")
        }
        this._age = age
    }

    //getter or accessor
    public get age(){
        if(this._age==undefined){
            throw new Error("The age property is not defined..!")
        }
        return this._age
    }

    public get fullName(){
    return `${this.firstName} ${this.lastName}`
    }
}
const person: Person = new Person("Abhinav", "Gautam")
console.log("person.fullName() :",person.fullName);
person.age = 40
console.log(person.age);
//by using getter you can simply invoke function as another properties of class...

console.log("------");
//static members
function loadInitialCount(): number{
    console.log("loadInitialCount() is invoked...");
    return 3
}
class Counter{
    static count = 0
    static increment(){
        Counter.count++ // this.count++ only with static method...
    }
    static{
        console.log("initializing Counter Class");
        Counter.count = loadInitialCount()
            
    }
}
//static members don't belong to the instance of the class, they just belong to the class itself
console.log("counter: ", Counter.count);
Counter.increment()
console.log("counter: ", Counter.count);
