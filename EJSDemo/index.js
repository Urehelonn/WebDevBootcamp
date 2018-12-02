var express = require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
})

app.get("/fuzzyfriend/:fuzz", function(req, res){
    var friends=req.params.fuzz;
    res.render("friends",{friends});
});

app.get("/posts/", function(req, res) {
   var post = [
       {title: "ASD", author: "Author"},
       {title: "QWE", author: "Cavy"},
       {title: "UIO", author: "Adam"},
       {title: "HJK", author: "Bob"}
       ];
   res.render("post", {posts:post});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("listening");
});