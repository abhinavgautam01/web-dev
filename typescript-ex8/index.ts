//tuple : for a particular arrangement/order (fixed shape/fixed length)
let person: [string, string, number] = ["John", "Doe", 18]
//tuples have types inside square brackets...whereas arrays have types declared outside square brackets..
type User = [string, string, number, string?]
let user:User = ["Mark","Doe",3]

type ListOfStuddents = [number, boolean, ...string[], number]       //rest operator : ... it also makes the type optional

const passingStudents: ListOfStuddents = [3, true, "John", "Golu", "Stella", 7]

//readOnly arrays
let number: readonly number[] = [1,2,3]
// number.push(2)
type ReadOnlyTuple = readonly [string, string, number?]
let a:ReadOnlyTuple = ["readOnly","tuple",3]
//tuples allow array with fixed length and array with ordered types...but we can push into it...which denies these properties


//array...different syntax ....can hover to check how it infered by typeScript..!
type a = Readonly<string[]>
type b = ReadonlyArray<(string | number)>

//tuple
type c = Readonly<[string, number]>


//enums....!

const STATUS_LOADING = "loading"
const STATUS_STOPPED = "stopped"

// STATUS_LOADING = "stopped"

//each of these properties declared act as a constant and cannot be changed...and are also act as a unique identifier
enum Direction {
    Up, //0
    Down,   //1
    Left,   //2
    Right,  //3
}

// console.log("Direction.up : ",Direction);
console.log("Direction.up : ",Direction.Up);
// Direction.Left = 5    gives error cannot assign left as its a read-only value 

enum Direction2 {
    Up=1, //1
    Down=9,   //9
    Left,   //10
    Right,  //11
}
// console.log("Direction.up : ",Direction2);
console.log("Direction.up : ",Direction2.Up);


enum Direction3 {
    Up="up", //up
    Down=0,   //0
    Left,   //1
    Right,  //2
}


enum Direction4 {
    "+"="up", //up
    "Down"="down",   //dowwn
    Left="left",   //left
    Right="right",  //right
}
console.log("Direction4["+"] : ",Direction4["+"])
console.log("Direction4[invertedCommas Down invertedCommas] : ",Direction4["Down"])  //console.log("Direction4.Down : ",Direction4.Down)

enum Roles {
    ADMIN = "admin",
    AUTHOR = "author",
    EDITOR = "editor"
}
type Person = {
    name: string
    email: string
    password: string
    role: Roles
}

let person2:Person = {
    name: "Golu",
    email: "golu@gmail.com",
    password:   "pass",
    role: Roles.ADMIN //It will print the value of ADMIN from enum Roles...which acts as a constant
}
console.log("Person2 {enum}: ", person2)

//Enums are available at runtime
