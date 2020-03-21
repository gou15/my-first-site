const express = require("express");
const app = express();
const port = 3000;
const home = require("./home");
const user = require("./user");

app.use("/", home);
app.use("/user", user);

app.listen(port, function(error) {
if (error) {
    console.error("This is broken, port " + port + " " + error);
}
console.log("Example app listening on port 3000!");
});