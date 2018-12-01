var express = require("express");
var app=express();

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/fuzzyfriend/:fuzz", function(req, res){
    var friends=req.params.fuzz;
    res.render("friends.ejs",{friends});
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("listening");
});