"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//async function : it returns a promise{it is generic}
function fetchFromDatabse(id) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
//arrow function
const anotherAsyncFunction = () => __awaiter(void 0, void 0, void 0, function* () {
});
function returnString(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve("string");
    });
}
function returnUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve({ name: "John", age: 20 });
    });
}
// returnString(1)
// returnUser(1)
//rest parameters and arguments
function multiplyBy(by, ...numbers) {
    return numbers.map((number) => by * number);
}
console.log("multiplyBy : ", multiplyBy(2, 3, 4, 5, 6));
console.log("multiplyBy : ", multiplyBy(3, 3, 4, 5, 6));
const args = [8, 5];
// const angle = Math.atan2(...args)    
// Error: A spread argument must either have a tuple type or be passed to a rest parameter
//rest argumments which are passed should be constant or tuple..!
const args1 = [8, 5];
const angle1 = Math.atan2(...args1);
const args2 = [8, 5];
const angle2 = Math.atan2(...args2);
