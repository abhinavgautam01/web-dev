//generic with classes
class box<T> {
    private _value: T
    constructor(value:T){
        this._value = value
    }
    get value():T{
        return this._value
    }
    set value(newValue:T){
        this._value = newValue
    }
}

const numberBox = new box(123)
const stringBox = new box<string>("abc")

type Identifiable = {
    id: number
}
class Repository<T extends Identifiable>{
    private items: T[] = []

    add(item:T){
        this.items.push(item)
    }
    getById(id:number):T | undefined{
        return this.items.find((item)=>item.id === id)
    }
    getAll(): T[]{
        return this.items
    }
    removeById(id:number):void{
        this.items = this.items.filter((item)=>item.id !== id)
    }
}

//below it will extend identifiable, so that we don't have to declare id here also
type User = Identifiable &{
    name: string
    email?: string
}
type Book = Identifiable &{
    title: string
    ISBN: number
}
const usersRepository = new Repository<User>()
usersRepository.add({
    id: 1,
    name: "Golu",
    email: "golu@gmail.com",
})
usersRepository.add({
    id: 2,
    name: "Abhinav",
    email: "abhinav@gmail.com",
})
usersRepository.add({
    id: 3,
    name: "Gautam",
    email: "Gautam@gmail.com",
})

console.log("usersRepository.getAll(): ",usersRepository.getAll());

console.log("usersRepository.getById(1): ",usersRepository.getById(1));


usersRepository.removeById(3)
console.log("usersRepository.getAll(): ",usersRepository.getAll());

const booksRepository = new Repository<Book>()
booksRepository.add({
    id: 1,
    title: "Harry Potter",
    ISBN: 1234
})
console.log("booksRepository.getById(1): ",booksRepository.getById(1));
