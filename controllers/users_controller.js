var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      users: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/portfolio", function(req, res) {
  user.lastOne(function(data) {
    var hbsObject = {
      users: data
    };
    console.log(hbsObject);
    res.render("portfolio", hbsObject);
  });
});

router.post("/", function(req, res) {
  user.create([
    "firstName", "lastName"
  ], [
    req.body.firstName, req.body.lastName
  ], 
  function() {
    res.redirect("/portfolio");

  });
});

// update to be added 

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   user.update({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  user.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
