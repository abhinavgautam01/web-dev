type Filter = {
    (array: number[], predicate: (item: number)=>boolean):number[]
    (array: string[], predicate: (item: string)=>boolean):string[]
    (array: object[], predicate: (item: object)=>boolean):object[]
}
//instead of creating types for function overload as above... you can use generics like below..!
const filter = <T>(array: T[], predicate: (item:T)=>boolean): T[] =>{
    let result: T[] = []
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
