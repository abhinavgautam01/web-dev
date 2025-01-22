interface Keyboard {
    type: string
    modelId: number
}
const createKeyboard = (modelId: number): Keyboard=>{
    return {type: "Keyboard", modelId}
}
console.log("Hello world..!");
