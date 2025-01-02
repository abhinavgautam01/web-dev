type KeyValuePair<K, V> = {
    key: K
    value: V
}
//generics with objects
let stringNumberPair: KeyValuePair<string, number> = {
    key: "age",
    value: 30
}
let numberArrayPair: KeyValuePair<number, string[]> = {
    key: 1234,
    value: ["a"]
}

type HasId  = {
    id: number
}
function printId<T extends HasId>(obj: T){
    console.log(obj.id)
}
const user = {
    id: 1234,
    name: "Golu"
}
printId(user)
const product = {
    id:12,
    name: "Laptop"
}
printId(product)

//keyof type operator
type Events = {
    id: number,
    date : Date,
    type: "indoor" | "outdoor"
}
type UnionOfKeysOfEvents = keyof Events//id|date|type
let idOfEvent: UnionOfKeysOfEvents = "id"
let dateofEvent: UnionOfKeysOfEvents = "date"

//first type of index signature ...where all the properties are of the type number
type Numeric = {
    [key:number]:string
}
type NumericKeyOf = keyof Numeric

type NumberAndString = {
    [key: string]: string
}
type NumberAndStringKeyOf = keyof NumberAndString
let stringObject: NumberAndString = {
    0: "First",
    second: "Second"
}
console.log("stringObject[0]: ",stringObject["0"]);

type Person = {
    name: string
    age: string
    address: string
}

type ParitalPerson = {
    [K in keyof Person]?:Person[K] | null
}
let partial: ParitalPerson = {
    name: "Golu"
}
//generic default values
async function fetchData<T = any>(url:string): Promise<T>{
    const response = await fetch(url)
    const data = await response.json()
    return data
}
// console.log("fetched data: ", fetchData("https://jsonplaceholder.typicode.com/posts/1"));
async function fetchDefault(){
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1")
    console.log("fetchDefault: ",data);
}
fetchDefault()

type Post = {
    userId: number
    id: number
    title: string
    body: string
}
async function fetchPost() {
    const post = await fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1")
    console.log("fetchPost: ",post);
}
fetchPost()

//implementing a polymorphic function...
const filter = (array: any[], predicate: (item:any)=>boolean) =>{
    let result: any = []
    for(let i = 0; i<array.length; i++){
        if(predicate(array[i])){
            result.push(array[i])
        }
    }
    return result
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function predicate(item: number){
    return item>7
}
let animals = ["cat", "dog", "rat"]
function filterCat(item:string){
    return item === "cat"
}
console.log("filter(numbers, predicate):", filter(numbers, predicate));
console.log("filter(animals, filterCat):", filter(animals, filterCat));
