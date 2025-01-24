export class User {
    constructor(greeting) {
        this.greeting = greeting;
    }
    createUser(name) {
        this.user = { name: name, greeting: this.greeting };
        return this.user;
    }
    showGreeting() {
        console.log(`${this.greeting}, ${this.user.name}`);
    }
}
export class AdminUser extends User {
    constructor() {
        super("Greeting to admin");
    }
    showGreeting() {
        console.log(`${this.greeting}, ${this.user.name}`);
    }
}
