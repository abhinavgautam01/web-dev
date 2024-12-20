//union types : object

type Dog = {
    name:string
    barks:boolean
    wags:boolean
}
type Cat = {
    name:string
    purrs:boolean
}
type DogAndCatUnion = Dog | Cat
//must contain all the properties of one of the object type..!
let dog : DogAndCatUnion = {
    name:"Buddy",
    barks:true,
    wags:true
}
let cat : DogAndCatUnion = {
    name:"Bella",
    purrs:true
}
let hybridAnimal : DogAndCatUnion = {
    name:"Buddy",
    barks:true,
    wags:true,
    purrs:true
}

//Discriminating Unions...: {Based on a common property}
type NetworkLoadingState = {
    state: "loading"
}
type NetworkFailedState = {
    state: "failed"
    code: number
}
type NetworkSuccessState = {
    state: "success"
    response: {
        title: string
        duratio: number
        summary: string
    }
}
//above types are discriminated on the base of common property state : 
type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState

function logger(state: NetworkState){
    switch(state.state){
        case "loading":
            return "Loading..."
        case "failed":
            return `Error ${state.code}`
        case "success":
            return `Downloading ${state.response}`
    }
}

//Intersection types...similar to union types but not union type...!
type CatAnimal = {
    name: string
    purrs: boolean
    color: string
}
type DogAnimal = {
    name: string
    barks: boolean
    color: string
}
type HybridAnimal = DogAnimal & CatAnimal

let hybridAnimal2: HybridAnimal = {
    name: "Max",
    color: "white",
    purrs: false,
    barks: true
}