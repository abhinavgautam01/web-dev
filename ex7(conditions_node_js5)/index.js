console.log("I am conditional tutorial...!")

let age=3
let grace=2
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)
//=:assignment operator
//==:equal to operator
//===:value equal to and of same type operator
//!==:not equal to or not of same type
if((age+grace)>18){
    console.log("You can drive")
}
else{
    console.log("You cannot drive...!")
}

//loops
console.log("I am loops tutorial...!")

let a=1
// console.log(a)
// console.log(a+1)
// console.log(a+2)
for (let i = 0; i < 7; i++) {
    console.log(a+i)
}

let obj={
    name:"Abhinav Gautam",
    Roll_no:"03",
    company:"yet to be decide...!"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

for (const c of "Golu") {
    console.log(c)
}

let i=0;
while(i<6){             //do-while...
    console.log(i)
    i++
}
