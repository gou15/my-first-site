let http = require("http");
let port = 3001;
let requestHandler = (request, response) => {
    response.end("Everything is fine here now, thank you, how are you?");
}
let server = http.createServer(requestHandler);
server.listen(port, err => {
    if (err) {
        return console.error("Yea, a little too Raph", err);
    }
    console.log(`Server running on ${port}`);
});