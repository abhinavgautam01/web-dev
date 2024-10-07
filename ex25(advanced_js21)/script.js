console.log("hello...");
//spread operator...
//destructuring...


async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

//iife  Immediately invoked function expression...
// (async function main(){
//     let a=await sleep()
//     console.log(a);
//     let b=await sleep()
//     console.log(b);
// })()


//destructuring...
// (async function main(){
//     let [x,y, ...rest]=[1,5,7,8,9,10]
//     console.log(x,y,rest)
// })()



// (async function main(){
//     let obj={
//         a:1,
//         b:2,
//         c:3
//     }

//     let{a,b}=obj
//     console.log(a,b)


// })()



//spread syntax
function sum(a,b,c){
    return a+b+c
}
(async function main(){
    let arr=[1,4,6]
    console.log(arr[0]+arr[1]+arr[2])

    //identical functions...
    console.log(sum(arr[0], arr[1], arr[2]))
    //spread operator ... 
    console.log(sum(...arr))  
})()


//hoisting
//if some var is defined in the code, it can be used before defining at the top of that block only without an error...except it will return undefined...instead of the value...it will not happen with the let(return error)
//function created with const cannot be hoisted...!
