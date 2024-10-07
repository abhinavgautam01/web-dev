console.log("Hey this is tutorial")

var a=5
var b=6
var c="Gautam"
console.log(a+b+9)
console.log(c)
console.log(typeof(a),typeof(b),typeof(c))
// var is globally scoped
//  let is locally scoped
const a1=6//constant value cannot be changed,error(TypeError: Assignment to constant variable)


let x="Golu"
let y=20
let z=3.55
const p=true
let q= undefined
let r=null
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
//typeof(null): object
//object is key value pair in javascript
let o={
    "name":"Abhinav Gautam",
    Roll_Number:"CUHP24MCA03",
    is_goodboy:true,
    key:"value"
}
console.log(o)
o.name="golu"//object_name.key , to change value at that key
console.log(o)
o.name="Abhinav Gautam"
console.log(o)


//conditions....
