
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
        
        // //Decorator Factory is Invoked before the class
        // @FirstDecorator('First Decorator')


enum Manufacturers{
    boeing = 'boeing',
    airbus = 'airbus'
}

interface AircraftInterface{
    _aircraftModel: string
    prototype?: any
    origin?: string
    manufacturer?: string
    type?: string
    airbusMethod?: ()=>void
    boiengMethod?: ()=>void
}

function AircraftManufacturer(manufacturer: Manufacturers){
    return(target : Function)=>{
        if(manufacturer === Manufacturers.airbus){
            target.prototype.origin = "United states of America";
            target.prototype.manufacturer = Manufacturers.airbus
            target.prototype.type = "Jet"
            target.prototype.airbusMethod = ()=>{
                console.log("Function performed by Airbus");
            }
        }else{
            target.prototype.origin = "France";
            target.prototype.manufacturer = Manufacturers.boeing
            target.prototype.type = "Helicopter"
            target.prototype.boeingMethod = ()=>{
                console.log("Function performed by Boeing");
            }
        }
    }
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface{
    constructor(
        public _aircraftModel: string,
        private pilot: string
    ){
        console.log("Aircraft Class Instantiated");
    }
    public pilotName(){
        console.log(this.pilot);
    }
    public get aircraftModel(){
        return this._aircraftModel
    }
}

@AircraftManufacturer(Manufacturers.boeing)
class Helicopter implements AircraftInterface{
    constructor(
        public _aircraftModel: string,
        private pilot: string
    ){}
    public pilotName(){
        console.log(this.pilot);
    }
    public get aircraftModel(){
        return this._aircraftModel
    }
}
const airplane: AircraftInterface = new Airplane("Airbus A380", "John")
const helicopter: AircraftInterface = new Helicopter("Boeing H470", "Mark")

console.log("---");

console.log(airplane);
console.log(helicopter);

airplane.airbusMethod? airplane.airbusMethod(): console.log("Airbus method does not exist");
