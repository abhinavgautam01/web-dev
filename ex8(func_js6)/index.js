function nice(name) {
    console.log("Hey "+name+" you are nice")
    console.log("Hey "+name+" you are good")
    console.log("Hey "+name+" your tshirt is nice")
}
nice("Abhinav")
console.log("..........")
nice("Golu")


function sum(a,b,c=3) {     //c is default parameter
    // console.log(a+b)
    console.log(a,b,c)
    return a+b+c
}
result1=sum(3,5,2)
result2=sum("abc","def")
result3=sum("abc",5)
result4=sum(5)
console.log("..........")



console.log("The sum of the number is : ",result1)
console.log("The sum of the string is : ",result2)
console.log("The sum of the string and number is : ",result3)
console.log("The sum of only one parameter : ",result4)


const func1=(x)=>{
    console.log("I am an arrow function...!",x)
}
func1(34)
func1(66)
func1(84)
