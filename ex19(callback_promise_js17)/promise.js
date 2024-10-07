console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    // console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you...!")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done");
            resolve("Abhinav")
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    // console.log(a);
    if (a < 0.5) {
        reject("No random number was not supporting you 2...!")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done 2");
            resolve("Abhinav 2")
        }, 3000);
    }
})


let prom3 = Promise.allSettled([prom1, prom2])
prom3.then((a) => {
    console.log(a)
}).catch((err) => {  //.catch used catch or display error...handle error...
    console.log(err)
})


// prom1.then((a) => {  
//     console.log(a)
// }).catch((err)=>{  //.catch used catch or display error...handle error...
//     console.log(err)
// })
//promise.finally used to perform general cleanups
//promise.all(promises) resolve means that promise returns value without an error
//promise.allsettled(promises) settles means that promise either resolves or rejects
//promise.race(promises) first promise to settle or its result/error becomes the outcome
//promise.any(promises) wait for the first promise to fullfill and its result becomes the outcome
//promise.resolve(promises) makes a resolved promise with the given value
//promise.reject(promises) makes a rejected promise with the given value

