var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Please login to get a user");
});
router.post("/", function(req, res) {
    res.send("Please login to create a user");
});
router.put("/", function(req, res) {
    res.send("Please login to edit a user");
});
router.delete("/", function(req, res) {
    res.send("Please login to delete a user");
});

module.exports = router;