// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require article Schema
var Articles = require("./models/articles");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate");

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//saving routes.
app.get("/api/saved", function(req, res){
  var query = Articles.find({});
  query.exec(function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);
  });
});

app.post("/api", function(req, res){
  var saved = new ArticleModel({
    title: req.body.title,
    url: req.body.url
  });

  saved.save(function(err, article){
    if(err){
      return console.log(err);
    }
    else{
      res.end();
    }
  });
});

app.delete('/api/saved/:id', function(req, res){
  console.log("delete route in server:", req.params.id);
  ArticleModel.findOneAndRemove({"_id": req.params.id}, function(err, article){
    if(err){
      console.log(err);
    }
    res.end();
  })
})
// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
// app.get("/api", function(req, res) {
//
//   // We will find all the records, sort it in descending order, then limit the records to 5
//   History.find({}).sort([
//     ["date", "descending"]
//   ]).limit(5).exec(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// This is the route we will send POST requests to save articles.
// app.post("/api", function(req, res) {
//   console.log("BODY: " + req.body.location);
//
//   // Here we'll save the location based on the JSON input.
//   // We'll use Date.now() to always get the current date time
//   History.create({
//     location: req.body.location,
//     date: Date.now()
//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   });
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
