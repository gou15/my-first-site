const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.listen(port, function(error) {
if (error) {
    console.error("This is broken, port " + port + " " + error);
}
console.log("Example app listening on port 3000!");
});

app.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
});
  
app.all("/products", function(req, res) {
    res.status(500).send("Everything on our side is broken. Sorry.");
});
  
app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});