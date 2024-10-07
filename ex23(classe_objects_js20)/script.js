console.log("hello...")

// let obj={
//     a:1,
//     b: "Abhinav"
// }
// console.log(obj);

// let animal={
//     eats:true,
//     is_live:true
// }
// let rabbit={
//     jump:true
// }

// rabbit.__proto__=animal  //sets rabbit.[[Prototype]]=animal
// prototype: it is a way, to add properties of other objects to an object
class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created...")
    }
    eats(){
        console.log("Khaa rha hun...")
    }
    
    jumps(){
        console.log("kood rhaa hun..")
    }
}

class Lion extends Animal{
    //extend is used to inherit prop of base class...
    constructor(name){
        super(name)
        //super keyword is used to run method of superclass... 
        // this.name=name
        console.log("Object is created and he is a lion...")
    }
    eats(){
        super.eats()
        console.log("Sher khaa rha hai...") //method overwriting...
        // super.jumps()
    }
    
}
let a=new Animal("Bunny")
console.log(a)
let l= new Lion("Sher")
console.log(l)


console.log(l instanceof Lion)
console.log(l instanceof Animal)
console.log(a instanceof Animal)
console.log(a instanceof Lion)
//instanceof is used to perform a check...

