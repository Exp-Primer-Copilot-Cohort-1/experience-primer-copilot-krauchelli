// Create web server
// Create a new web server using the express framework
var express = require("express");
var app = express();

// Create a new web server using the express framework
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");
var commentsPath = path.join(__dirname, "comments.json");

// Use the body-parser middleware to parse the JSON body in the request
app.use(bodyParser.json());

// Use the body-parser middleware to parse the JSON body in the request
app.use(bodyParser.json());

// Create a route for the comments API
app.get("/api/comments", function (req, res) {
  fs.readFile(commentsPath, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

// Create a route for the comments API
app.get("/api/comments", function (req, res) {
  fs.readFile(commentsPath, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});
