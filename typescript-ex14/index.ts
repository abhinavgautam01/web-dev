//generic are similar to variables, which takes types as values...!

//generic function
function returnParams<Type>(param: Type): Type {
    return param    //genericFunction
}

console.log("returnParams: ",returnParams<string>("String"));

const myParam: <T>(param:T)=>T = (param)=> param    //genericFunctionSignatuare
console.log("myParam: ",myParam<number>(123));

const myParam2 = function <U, Z>(param: U, param2: Z): U|Z {
    return param    //genricFunctionExpression
}
console.log("myParam2: ",myParam2<number[], string[]>([1,2,3], ["ab","cd"]))

type ObjectType = {
    mpParam: <V, X>(param: V, param2: X)=> V|X
}

type MyParam = <K>(param: K) => K