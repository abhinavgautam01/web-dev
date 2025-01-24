window.AuthService = {
    currentUser : null,
    login(username, password){
        if(username === "user" && password === "password123"){
            this.currentUser = {id: 1, username}
            console.log("Login Successful");
            return true            
        }else{
            console.log("Login Failed!");
            return false            
        }
    },
    isLoggedIn(){
        return this.currentUser !== null
    }
}