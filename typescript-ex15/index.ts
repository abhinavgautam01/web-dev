//generic function declarations...

type GetFirstElement = <T>(arr: T[])=>T
//by this you can declare function for multiple types
const getFirstElement: GetFirstElement = (arr) => {
    return arr[0]
}
const numbersArray = [1, 23, 4, 5]
const stringArray = ["a", "v"]
let numberOutput = getFirstElement<number>(numbersArray)
let stringOutput = getFirstElement<string>(stringArray)
console.log("numberOutput: ", numberOutput);
console.log("stringOutput: ", stringOutput);


type FirstElement<T> = (arr: T[])=>T
//by this you can declare function for specific type
//this is used when you want to write separate functions for each of type
const firstElement: FirstElement<string> = (arr)=>{
    return arr[0]
}
//genric and constraints with arrays

type HasLength = {
    length: number
}
function logLength<T extends HasLength>(item: T): void{
    console.log("item.length: ",item.length);
}
logLength(numbersArray)
logLength(stringArray)
logLength("stringArray")

logLength({name : "John", length:12})
//genric constraints are very useful when you want to narrow down your generics to a specific type...