const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/evo1", (req, res) => {
  res.render("evo1");
});

app.get("/evo2", (req, res) => {
  res.render("evo2");
});

app.get("/evo3", (req, res) => {
  res.render("evo3");
});

app.get("/evo4", (req, res) => {
  res.render("evo4");
});

app.get("/evo5", (req, res) => {
  res.render("evo5");
});

app.get("/evo6", (req, res) => {
  res.render("evo6");
});

app.get("/evo7", (req, res) => {
  res.render("evo7");
});

app.get("/evo8", (req, res) => {
  res.render("evo8");
});

app.get("/evo9", (req, res) => {
  res.render("evo9");
});

app.get("[/, /index, /home]", (req, res) => {
  res.render("index");
});

app.get('/firstsite', (req, res) =>{
  res.render("firstsite");
});

app.use(function(req, res, next) {
  res.status(404).render("404", {url: req.url});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});