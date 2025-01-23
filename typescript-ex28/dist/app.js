"use strict";
// //decorator factory
// function FirstDecorator(name: string){
//     //decorator function can use any parameter which is passed to decorator factory
//     return function(constructor: Function){
//         console.log(`${name} Invoked`);
//         console.log(constructor);
//         console.log("---");
//         console.log(`${name}: Class ${constructor.name} has been decorated.`);
//         console.log(`Class ${constructor.name} has been decorated.`);
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// //Decorator Factory is Invoked before the class
// @FirstDecorator('First Decorator')
var Manufacturers;
(function (Manufacturers) {
    Manufacturers["boeing"] = "boeing";
    Manufacturers["airbus"] = "airbus";
})(Manufacturers || (Manufacturers = {}));
function AircraftManufacturer(manufacturer) {
    return (target) => {
        if (manufacturer === Manufacturers.airbus) {
            target.prototype.origin = "United states of America";
            target.prototype.manufacturer = Manufacturers.airbus;
            target.prototype.type = "Jet";
            target.prototype.airbusMethod = () => {
                console.log("Function performed by Airbus");
            };
        }
        else {
            target.prototype.origin = "France";
            target.prototype.manufacturer = Manufacturers.boeing;
            target.prototype.type = "Helicopter";
            target.prototype.boeingMethod = () => {
                console.log("Function performed by Boeing");
            };
        }
    };
}
let Airplane = class Airplane {
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
        console.log("Aircraft Class Instantiated");
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
};
Airplane = __decorate([
    AircraftManufacturer(Manufacturers.airbus),
    __metadata("design:paramtypes", [String, String])
], Airplane);
let Helicopter = class Helicopter {
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
};
Helicopter = __decorate([
    AircraftManufacturer(Manufacturers.boeing),
    __metadata("design:paramtypes", [String, String])
], Helicopter);
const airplane = new Airplane("Airbus A380", "John");
const helicopter = new Helicopter("Boeing H470", "Mark");
console.log("---");
console.log(airplane);
console.log(helicopter);
airplane.airbusMethod ? airplane.airbusMethod() : console.log("Airbus method does not exist");
//# sourceMappingURL=app.js.map