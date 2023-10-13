const express = require("express");
const app = express();

app.use(function(req, res ,  next){            // Middeleware will run always before any route
    console.log("middleware working ");
    next();
});

app.get("/", function (req, res) {                  //   "/" for home page
  res.send("Hello World, this  is home page");      // req - request sent by user
});                                                 // res - response sent from server

app.get("/profile", function (req, res) {
    res.send("this is a profile page ");
  });

  // daynamic routing ==> to make any route dynamic use : at the place you want to make it dynamic and to access there value use req.params
  app.get("/profile/:name", function (req, res) {
    res.send(`this is a profile page for ${req.params.name}`);
  });




app.listen(3000);
