"use strict";
//enums vs objects
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Rigth"] = 3] = "Rigth";
})(Direction || (Direction = {}));
let edirection = 0 /* EDirection.Up */;
let direction = Direction.Left;
//objects declared as const act same as enums...
const ODirection = {
    UP: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
//values of read only object cannot be changed
// ODirection.UP = 3
let a = ODirection.UP;
console.log("ODirectio.UP", a);
//computed enums...
var AccessPermision;
(function (AccessPermision) {
    AccessPermision[AccessPermision["None"] = 0] = "None";
    AccessPermision[AccessPermision["Read"] = 1] = "Read";
    AccessPermision[AccessPermision["Write"] = 2] = "Write";
    AccessPermision[AccessPermision["ReadWrite"] = 3] = "ReadWrite";
    AccessPermision[AccessPermision["Delete"] = 4] = "Delete";
    AccessPermision[AccessPermision["All"] = 7] = "All"; //  '+' and '|' both acts as union(addition)
})(AccessPermision || (AccessPermision = {}));
//enums as Unions and Types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "circle";
    ShapeKind["Square"] = "square";
})(ShapeKind || (ShapeKind = {})); /* Circle | Square */
let circle = {
    radius: 100,
    kind: ShapeKind.Circle
};
function printShape(shape /* Circle | Square */) {
    console.log("Shape:", shape);
}
printShape(ShapeKind.Circle);
//enums helps in typeSafety
