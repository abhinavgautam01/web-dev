"use strict";
//tuple : for a particular arrangement/order (fixed shape/fixed length)
let person = ["John", "Doe", 18];
let user = ["Mark", "Doe", 3];
const passingStudents = [3, true, "John", "Golu", "Stella", 7];
//readOnly arrays
let number = [1, 2, 3];
let a = ["readOnly", "tuple", 3];
//enums....!
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";
// STATUS_LOADING = "stopped"
//each of these properties declared act as a constant and cannot be changed...and are also act as a unique identifier
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// console.log("Direction.up : ",Direction);
console.log("Direction.up : ", Direction.Up);
// Direction.Left = 5    gives error cannot assign left as its a read-only value 
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 9] = "Down";
    Direction2[Direction2["Left"] = 10] = "Left";
    Direction2[Direction2["Right"] = 11] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log("Direction.up : ",Direction2);
console.log("Direction.up : ", Direction2.Up);
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "up";
    Direction3[Direction3["Down"] = 0] = "Down";
    Direction3[Direction3["Left"] = 1] = "Left";
    Direction3[Direction3["Right"] = 2] = "Right";
})(Direction3 || (Direction3 = {}));
var Direction4;
(function (Direction4) {
    Direction4["+"] = "up";
    Direction4["Down"] = "down";
    Direction4["Left"] = "left";
    Direction4["Right"] = "right";
})(Direction4 || (Direction4 = {}));
console.log("Direction4[" + "] : ", Direction4["+"]);
console.log("Direction4[invertedCommas Down invertedCommas] : ", Direction4["Down"]); //console.log("Direction4.Down : ",Direction4.Down)
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
let person2 = {
    name: "Golu",
    email: "golu@gmail.com",
    password: "pass",
    role: Roles.ADMIN //It will print the value of ADMIN from enum Roles...which acts as a constant
};
console.log("Person2 {enum}: ", person2);
//Enums are available at runtime
