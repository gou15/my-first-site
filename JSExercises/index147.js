let user = {
    username: "batman",
    password: "Alfred1960ROCKS!"
};
function shouldOpenBatCave(user){
    if (user.username == "batman" && user.password == "Alfred1960ROCKS!"){
        console.log("That works")
    }
    else {
        console.log("That didn't")
    }
}
shouldOpenBatCave(user);