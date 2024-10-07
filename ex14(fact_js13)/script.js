console.log("Factorial of a number")
// let arr2=[1,2,3,4,5,6]
let a = 6
function fact(number) {
    let arr = Array.from(Array(number + 1).keys())
    // console.log(arr.slice(1))
    let c = arr.slice(1).reduce((a, b) => {  //let c=arr.slice(1,).reduce((a,b)=>a*b)return c
        return a * b
    })
    // console.log(c)
    return c
}

function factfor(number){
    let fac=1
    for (let index = 1; index <= number; index++) {
        fac=fac*index
    }
    return fac
}
console.log(fact(a))
console.log(factfor(5))