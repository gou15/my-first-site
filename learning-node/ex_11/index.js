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

app.get(["/", "index", "home", "index.html", "/index", "/index.html"], function(request, response) {
    response.sendFile(path.join(__dirname, "/index.html"));
});
app.get(["/products", "products.html", "/products.html", "products"], function(request, response) {
    response.sendFile(path.join(__dirname, "/products.html"));
});