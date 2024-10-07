let r=Math.random()
let first,second,third
if(r<0.33){
    first="Crazy"
}
else if(r<0.66 && r>=0.33){
    first="Amazing"
}
else{
    first="Fire"
}

r=Math.random()
if(r<0.33){
    second="Engine"
}
else if(r<0.66 && r>=0.33){
    second="Food"
}
else{
    second="Garments"
}

r=Math.random()
if(r<0.33){
    third="Bros"
}
else if(r<0.66 && r>=0.33){
    third="Limited"
}
else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)
