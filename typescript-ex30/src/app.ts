//namespaces

// ///<reference path="utils/math-utils.ts"/>
// ///<reference path="utils/string-utils.ts"/>


//ECMA Script module syntax..!
import { Mathutils } from "./utils/math-utils.js";
import { Stringutils } from "./utils/string-utils.js";
import { addnum } from "./functions/math.js";
let sum = Mathutils.add(3, 4)
let combine = Stringutils.add("Abhinav ", "Gautam")
console.log("sum:",sum);
console.log("combine:",combine);
let subtract = Mathutils.subtract(7, 4)
let replace = Stringutils.subtract("Abhinav Gautam is a good boy", " is a good boy")
console.log("subtract:", subtract);
console.log("replace:", replace);

//CJS Module syntax..!
const printHello = require("./functions/string.js")
printHello()
console.log(addnum(5,2))
