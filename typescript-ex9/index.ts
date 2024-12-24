//enums vs objects

enum Direction {
    Up,
    Down,
    Left,
    Rigth
}

//with const keyword ...it is not compiled to javascipt until its value is not used...and only value which is used is compiled...whole enum is not compiled..!
const enum EDirection { 
    Up,
    Down,
    Left,
    Rigth
}
let edirection = EDirection.Up
let direction = Direction.Left

//objects declared as const act same as enums...
const ODirection = {
    UP: 0,
    Down: 1,
    Left: 2,
    Right: 3
}as const
//values of read only object cannot be changed
// ODirection.UP = 3
let a = ODirection.UP
console.log("ODirectio.UP", a);

//computed enums...
enum AccessPermision {
    None = 0,
    Read = 1,
    Write = 2,
    ReadWrite = Read + Write,
    Delete = 4,
    All = ReadWrite | Delete   //  '+' and '|' both acts as union(addition)
}


//enums as Unions and Types
enum ShapeKind {
    Circle = "circle",
    Square = "square",
} /* Circle | Square */
type Circle = {
    kind : ShapeKind.Circle,
    radius : number
}
type Square = {
    kind : ShapeKind.Square,
    sideLength : number
}

let circle: Circle = {
    radius: 100,
    kind: ShapeKind.Circle
}

function printShape(shape: ShapeKind/* Circle | Square */){
    console.log("Shape:",shape);
}
printShape(ShapeKind.Circle)
//enums helps in typeSafety