const user = AuthService.login("user", "password123")
if(AuthService.isLoggedIn()){
    console.log("User is logged in");
}else{
    console.log("Login failed"); 
}
let numbers = [1, 2, 3, 4]