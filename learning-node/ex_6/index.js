let greet = (fName, lName, callback) => {
    console.log(`Hi ${fName} ${lName}`);
    callback();
};

function callbackMessage(){
    console.log("This code happens later");
};

greet("Pangaea", "Panga", callbackMessage);