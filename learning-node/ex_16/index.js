const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use("/assets", express.static("public"));

app.listen(port, function(error) {
    if (error) {
        console.error ("This is broken, port " + port + " " + error);
    }
    console.log(`Server is running on port ${port}`);
});

app.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
});