var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var fuzz=["qwe","ert","poi","oij"];
       
       
app.get("/", function(req, res){
   res.render("home", {fuzz}); 
});

app.post("/addFuzz", function(req, res){
    fuzz.push(req.body.name);
    res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server starts...");
});