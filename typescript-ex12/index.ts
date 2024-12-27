//async function : it returns a promise{it is generic}
async function fetchFromDatabse(id:number): Promise<any>{

}
//arrow function
const anotherAsyncFunction = async (): Promise<any> =>{

}

async function returnString(id:number): Promise<string>{
    return Promise.resolve("string")
}

type User = {
    name: string
    age: number
}
async function returnUser(id:number): Promise<User> {
    return Promise.resolve({name: "John", age:20})
}
// returnString(1)
// returnUser(1)


//rest parameters and arguments
function multiplyBy(by:number, ...numbers:number[]){
    return numbers.map((number)=>by*number)
}
console.log("multiplyBy : ", multiplyBy(2,3,4,5,6))
console.log("multiplyBy : ", multiplyBy(3,3,4,5,6))


const args = [8, 5]
// const angle = Math.atan2(...args)    
// Error: A spread argument must either have a tuple type or be passed to a rest parameter
//rest argumments which are passed should be constant or tuple..!

const args1 = [8, 5] as const
const angle1 = Math.atan2(...args1)


const args2:[number, number] = [8, 5]
const angle2 = Math.atan2(...args2)