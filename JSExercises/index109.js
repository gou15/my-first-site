function validateUser(username, password){
    if (username == "nacho" && password == "Nerd1979" || username == "pedro" && password == "Batman0217" || username =="marta" && password == "Mother2312"){
        console.log(`Welcome ${username}!`)
    } else{
        console.error("Please input valid credentials")
    }
}
validateUser("pedro", "Batman0217");