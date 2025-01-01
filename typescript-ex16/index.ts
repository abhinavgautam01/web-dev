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