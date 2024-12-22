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
