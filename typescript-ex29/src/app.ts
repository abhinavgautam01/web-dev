// enum Manufacturers {
//     boeing = 'boeing',
//     airbus = 'airbus'
// }

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


function first(){
    console.log("first(): factory evaluated");
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        console.log("first(): called");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("---");
        
    }
}
function second(){
    console.log("second(): factory evaluated");
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        console.log("second(): called");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("---");
    }
}

class ExampleClass{
    @first()
    @second()
    method(){}
}