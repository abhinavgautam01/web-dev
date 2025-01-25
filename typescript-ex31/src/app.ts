const user = AuthService.login("user", "password123")
if(AuthService.isLoggedIn()){
    console.log("User is logged in");
}else{
    console.log("Login failed"); 
}
const numbers = {
    x: 10,
    y: {
        z:20,
    }
}
console.log((numbers));
numbers.x = 11
console.log((numbers));
let firstNameField = document.getElementById("firstName")! as HTMLInputElement

type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri"
type Day = Weekdays | "Sat" | "Sun"

//concept of totality
function nextDayForAWeekDay(weekday: Weekdays): Day{
    switch(weekday){
        case "Mon":
            return "Tue"
        case "Tue":
            return "Wed"
        case "Wed":
            return "Thu"
        case "Thu":
            return "Fri"
        case "Fri":
            return "Sat"
    }
}

type ServiceList = UserDetailsAPIResponse["serviceList"] 

type UserDetailsAPIResponse = {
    id: number;
    name: string;
    serviceList: {
        count: number;
        services:{
            id: number;
            name: string;
            price: number;
        }[]
    }
}

function fetchUserDetails(name: string):Promise<UserDetailsAPIResponse>{
    return new Promise((res, rej)=>{
        if(name){
            res({
                id: 23,
                name: "John",
                serviceList: {
                    count: 2,
                    services: [{
                        id: 1,
                        name: "service1",
                        price: 123
                    },{
                        id: 2,
                        name: "service2",
                        price: 321
                    }]
                }
            })
        }else rej(new Error("Pass new a valid name"))
    })
}

function printServiceList(services: ServiceList): void{
    console.log(services);
}

fetchUserDetails("John").then((res)=>{
    console.log(res);
    printServiceList(res.serviceList)
}).catch((err)=>{
    console.log(err);
})