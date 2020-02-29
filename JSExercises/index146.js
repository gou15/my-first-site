let user = {
    username: "batman",
    password: "Alfred1960ROCKS!"
};
function shouldOpenBatCave(username, password){
    if (username == "batman" && password == "Alfred1960ROCKS!"){
        console.log("That works")
    }
    else {
        console.log("That didn't")
    }
}
shouldOpenBatCave("batman", "Alfred1960ROCKS!");