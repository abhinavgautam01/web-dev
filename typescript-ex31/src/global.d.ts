export declare global {
    interface User{
        id: number,
        username: string
    }
    interface AuthService{
        currentUser: User | null
        login(username: string, password: string): boolean
        isLoggedIn():boolean
    }
    //name of object with the name of the interface declared for global context..!
    var AuthService: AuthService
}