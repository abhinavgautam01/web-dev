let a= prompt("Enter first number...")
let b= prompt("Enter second number...")
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("invalid input...please input only integer values")
    //errors can be thrown by users...custom_errors
}
let sum=parseInt(a)+parseInt(b)
//not a number
let x = 1
function main(){
    try {
        console.log("The sum is ", sum*x)
        return true

    } catch (error) {
        console.log("Error haii isme...!")
        return false
        // console.log(error.name);
        // console.log(error.message);
        // console.log(error.stamp);
    }
    finally{
        console.log("files are being closed...");
    }
    //finally is useful in functions...as statements inside finally will also run after function has returned something
    //as in functions, if function has returned a value statements after that are not executed or we can say ignored...
}
let c=main()
// console.log(c)