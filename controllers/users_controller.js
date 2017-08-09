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
    // console.log(hbsObject);
    res.render("landing", hbsObject);
  });
});

router.get("/input", function(req, res) {
    user.all(function(data) {
    var hbsObject = {
      users: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/portfolio", function(req, res) {
  user.lastOne(function(data) {
    var hbsObject = {
      users: data
    };
    console.log(hbsObject);
    //handlebars.compile($('#t').html());
     
    res.render("portfolio", hbsObject);
  });
});

router.post("/", function(req, res) {
  user.create([
    "firstName", "lastName", "elevator", "webAddress", "email", "address", 
    "education1", "education2", "education3",
    "skills", "picture",
    "exp1", "exp1desc", "exp2", "exp2desc", "exp3", "exp3desc",
    "proj1", "proj1desc", "proj2", "proj2desc", "proj3", "proj3desc", "color"
  ], [
    req.body.firstName, req.body.lastName, req.body.elevator, req.body.webAddress, req.body.email, req.body.address, 
    req.body.education1, req.body.education2, req.body.education3, 
    req.body.skills, req.body.picture,
    req.body.exp1, req.body.exp1desc, req.body.exp2, req.body.exp2desc, req.body.exp3, req.body.exp3desc,
    req.body.proj1, req.body.proj1desc, req.body.proj2, req.body.proj2desc, req.body.proj3, req.body.proj3desc, req.body.color
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
