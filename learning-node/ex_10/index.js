let express = require("express");
let app = express();
let port = 3000;
let oneLinerJoke = require("one-liner-joke");
let getRandomJoke = oneLinerJoke.getRandomJoke();

app.get("/", function(request, response) {
  response.send("running first node.js and express as web server");
});

app.listen(port, function(error) {
    if (error) {
        console.error ("This is broken, port " + port + " " + error);
    }
    console.log(`Server is running on port ${port}`);
});
app.get("/", function(request, response){
    response.send("Welcome!");
});
app.get("jokes", function(request, response){
    response.send(getRandomJoke, getRandomJoke);
});
app.get("joke", function(request, response){
    response.send(getRandomJoke);
});
app.post("joke", function(request, response){
    response.send("I don't want your new jokes, I'm funny enough");
});
app.put("joke", function(request, response){
    response.send("You're not changing my act");
});
app.delete("joke", function(request, response){
    response.send("Good jokes don't get old");
});
app.all("joke", function(request, response){
    response.send("You're looking for jokes everywhere");
});