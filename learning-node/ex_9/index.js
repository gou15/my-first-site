let Logger = require("logplease");
let logger = Logger.create("utils");
let express = require("express");
let app = express();
let port = 3000;

app.get("/", function(request, response) {
  response.send("running first node.js and express as web server");
});

app.listen(port, function(error) {
    if (error) {
        logger.warn ("This is broken, port " + port + " " + error);
    }
    logger.info(`Server is running on port ${port}`);
});