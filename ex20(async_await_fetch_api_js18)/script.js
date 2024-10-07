//settle means resolve or rejects
//resolve means promised has settled successfully
//reject means promised has not settled successfully
console.log("Hello there...")

// async function getdata(){
//     //simulate getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }
async function getdata(){
    //simulate getting data from a server
    // let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')//fetch api ...get request and post request...
    // .then(response => response.json())
    // .then(json => console.log(json))
    let x= await fetch('https://jsonplaceholder.typicode.com/posts', {
        //post request
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data=await x.json()
    console.log(data)
    console.log(x)
    return 455
}
//get...post...put...delete request...
//get 
//this overall async function is returning a promise...


async function main(){
//Promises can be used to make process or something wait...
console.log("Loading module")
console.log("Do something else")
console.log("Load data...");
let data=await getdata()
//await will be used to get data...other-wise it will just return promise...
//await can be only used in async function...
console.log(data)
console.log("process data");

console.log("Task 2");
}
main()
//data will take time from the server to reach client ...so it will return promise instead of dat...
//other statements will continue to run...
// data.then((v)=>{
//     console.log(data)
//     console.log("process data");
    
//     console.log("Task 2");
    
// })


