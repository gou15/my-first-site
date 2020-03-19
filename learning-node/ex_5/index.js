let Logger = require("logplease");
let logger = Logger.create("utils");
let numbers = require("./numbers");

let getEven = numbers();

logger.info(getEven(2));