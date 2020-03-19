let greeter = require("./greeter");

let callbackMessage = function(){
    console.log("We using node modules");
};

greeter("Leela", "Stitchy", callbackMessage);