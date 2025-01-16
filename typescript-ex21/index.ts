class Person{
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ){
        if(age>200 || age <1){
            throw new Error("The age must be within age range 0-200")
        }
    }
    public fullName(){
    return `${this.firstName} ${this.lastName}`
    }
}
const person: Person = new Person("Abhinav", "Gautam", 20)
console.log("person.fullName() :",person.fullName());