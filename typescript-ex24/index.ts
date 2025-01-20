//abstract classes cannot be instantiated...

type Holidays = {
    date: Date
    reason: string
}[]
abstract class Department{
    protected abstract holidays: Holidays
    protected constructor(protected name: string){}

    public addHolidays(holidays: Holidays){
        if(Array.isArray(holidays)){
            for(const holiday of holidays){
                this.holidays.push(holiday)
            }
        }
    }
    public abstract printHolidays():void
}
class ItDepartment extends Department{
    protected holidays: Holidays = []
    constructor(){
        super("IT Department")
    }
    public printHolidays(){
        if(this.holidays.length===0){
            return console.log("There are no Holidays..!");
        }
        console.log(`Here is the list of holidays ${this.name}: `);
        this.holidays.forEach((holiday:{date: Date, reason: string}, index: number)=>{
            console.log(`${index+1}. ${holiday.date}, ${holiday.reason}`);
        })
        
    }
}

class AdminDepartment extends Department{
    protected holidays: Holidays = []
    constructor(){
        super("Admin Department")
    }
    public printHolidays(){
        if(this.holidays.length===0){
            return console.log("There are no Holidays..!");
        }
        console.log(`Here is the list of holidays ${this.name}: `);
        this.holidays.forEach((holiday:{date: Date, reason: string}, index: number)=>{
            console.log(`${index+1}. ${holiday.date}, ${holiday.reason}`);
        })
        
    }
}

const itHolidays: Holidays = [{
    date: new Date(2025, 3, 25),
    reason: "IT Department Day"
},{
    date: new Date(2025, 11, 25),
    reason: "Christmas Day"
}]
const adminHolidays: Holidays = [{
    date: new Date(2025, 1, 20),
    reason: "Admin Department Day"
},{
    date: new Date(2025, 11, 25),
    reason: "Christmas Day"
}]

const itDepartment: ItDepartment = new ItDepartment()
const adminDepartment: AdminDepartment = new AdminDepartment()
itDepartment.addHolidays(itHolidays)
adminDepartment.addHolidays(adminHolidays)
// console.log("itdept: ", itDepartment);
// console.log("admindept: ", adminDepartment);
itDepartment.printHolidays()
console.log("---");
adminDepartment.printHolidays()
