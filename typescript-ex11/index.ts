//anonymous function
const students: string[] = ["Alice", "Bob", "Mark"]
//in anonymous function typescript correctly infers the parameter
students.map((student, i)=>{
    console.log("student",i++,": ",student);
})
students.map(function(student,i){
    console.log("student",i++,": ",student);
})

//void and never types
//void function completes its execution
function writeToDatabase(value:string): void{
    console.log("Writing to a Database: ",value)
}
//we assign a never type to a function that never completes its execution, or especially to a function that throws an error 
function throwError(error:string):never{//you can also use void instead of never, but never is sstricter type for this
    throw new Error(error)
}
type check = never extends void ? true : false//it proves that never is the sub type of void
type check2 = void extends never ? true : false

//only use never, when you are sure that the function never completes its execution
//use void when you are sure that function completes its execution, but do no return any value..!