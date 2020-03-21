let express = require("express");
let app = express();
let port = 3000;

app.listen(port, function(error) {
    if (error) {
        console.error ("This is broken, port " + port + " " + error);
    }
    console.log(`Server is running on port ${port}`);
});

app.get("/", function(request, response){
    response.json({
        "status": 200,
        "message": "Este request/response está OK"
      });
});

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
  
    next();
};

app.use(requestTime);