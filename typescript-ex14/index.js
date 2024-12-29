"use strict";
//generic are similar to variables, which takes types as values...!
//generic function
function returnParams(param) {
    return param; //genericFunction
}
console.log("returnParams: ", returnParams("String"));
const myParam = (param) => param; //genericFunctionSignatuare
console.log("myParam: ", myParam(123));
const myParam2 = function (param, param2) {
    return param; //genricFunctionExpression
};
console.log("myParam2: ", myParam2([1, 2, 3], ["ab", "cd"]));
