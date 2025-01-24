"use strict";
// enum Manufacturers {
//     boeing = 'boeing',
//     airbus = 'airbus'
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
// interface AircraftInterface {
//     _aircraftModel: string
//     pilotName: (name: string, lastName: string)=>void
//     prototype?: any
//     origin?: string
//     manufacturer?: string
//     type?: string
//     airbusMethod?: () => void
//     boiengMethod?: () => void
// }
// function StaticMethodDecorator(constructor: Object, methodName: string, descriptor: PropertyDescriptor){
//     console.log(constructor);
//     console.log(methodName);
//     console.log(descriptor);
//     descriptor.writable = false
// }
// function MethodDecorator(classPrototype: Object, methodName: string, descriptor: PropertyDescriptor){
//     console.log(classPrototype);
//     console.log(methodName);
//     console.log(descriptor);
//     // descriptor.writable = false
// }
// function ParameterDecorator(classPrototype: Object, methodName: string, index: number){
//     console.log(classPrototype);
//     console.log(methodName);
//     console.log(index);
// }
// function PropertyDecorator(classPrototype: Object, propertyName:string){
//     console.log(classPrototype);
//     console.log(propertyName);
// }
// function AccessorDecorator(classPrototype: Object, accessorName: string, propertyDescriptor: PropertyDescriptor){
//     console.log(classPrototype);
//     console.log(accessorName);
//     console.log(propertyDescriptor);
// }
// class Airplane implements AircraftInterface {
//     @PropertyDecorator
//     public _aircraftModel: string
//     constructor(
//         _aircraftModel: string,
//     ) {
//         this._aircraftModel = this.aircraftModel
//     }
//     // @StaticMethodDecorator
//     public static seatCount(): void{
//         console.log("150 seats");
//     }
//     // @MethodDecorator
//     public pilotName(name: string, /*@ParameterDecorator lastName: string*/) {
//         console.log(name);
//     }
//     @AccessorDecorator
//     public get aircraftModel() {
//         return this._aircraftModel
//     }
// }
// //for static method or property, you wil always get constructor as first argument in decorators
// interface MapLocation {
//     lat: number,
//     long: number
// }
// function AddLocation(lat: number, long: number){
//     return <T extends {new(...args: any[]): {}}>(classConstructor: T)=>{
//         return class extends classConstructor{
//             public mapLocation: MapLocation;
//             constructor(...args: any[]){
//                 super(...args)
//                 this.mapLocation = {lat, long}
//             }
//         }
//     }
// }
// @AddLocation(1.234, 1.876)
// class Person{
//     constructor(
//         public name: string, 
//         public age: number, 
//     ){
//     }
// }
// const person: Person = new Person("John", 20)
// console.log(person);
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("---");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("---");
    };
}
class ExampleClass {
    method() { }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClass.prototype, "method", null);
//# sourceMappingURL=app.js.map