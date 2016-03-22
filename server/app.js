var express = require("express");
var app = express();
var path = require("path");
var students = require("./public/assets/data/students.json");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", (process.env.PORT || 8000));


app.get("/students", function(req,res){
  res.send(students);
})

app.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get ("port"));
});

module.exports = app;
