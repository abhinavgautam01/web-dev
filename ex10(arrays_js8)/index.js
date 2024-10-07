let a=[1,93,5,6,88]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

console.log(".......")
a.forEach((value,index,arr)=>{
    console.log(value, index, arr)
})

console.log(".......")
let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}

console.log(".......")
for (const element of a) {
    console.log(element)
}

//map...filter...reduce
console.log(".......")
let arr=[2,1,4,6,7]
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(".......")
// console.log(newarr)
console.log(".......")
let newarr=[]=arr.map((e, index, array)=>{
    return e**2
})
console.log(newarr)

console.log(".......")
const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterthanseven))

console.log(".......")
let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

console.log(".......")
let arr3=Array.from("Gautam")
console.log(arr3)