"use strict";
//namespaces
Object.defineProperty(exports, "__esModule", { value: true });
// ///<reference path="utils/math-utils.ts"/>
// ///<reference path="utils/string-utils.ts"/>
//ECMA Script module syntax..!
const math_utils_js_1 = require("./utils/math-utils.js");
const string_utils_js_1 = require("./utils/string-utils.js");
const math_js_1 = require("./functions/math.js");
let sum = math_utils_js_1.Mathutils.add(3, 4);
let combine = string_utils_js_1.Stringutils.add("Abhinav ", "Gautam");
console.log("sum:", sum);
console.log("combine:", combine);
let subtract = math_utils_js_1.Mathutils.subtract(7, 4);
let replace = string_utils_js_1.Stringutils.subtract("Abhinav Gautam is a good boy", " is a good boy");
console.log("subtract:", subtract);
console.log("replace:", replace);
//CJS Module syntax..!
const printHello = require("./functions/string.js");
printHello();
console.log((0, math_js_1.addnum)(5, 2));
