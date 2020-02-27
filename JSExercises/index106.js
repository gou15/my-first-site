function getUserID(){
    return 30;
}
function isUserValid(){
    if (getUserID() > 30){
        return true;
    }
    else {
        return false;
    }
}
if (isUserValid() == true){
    console.log("User valid");
}
else {
    console.log("User invalid");
}