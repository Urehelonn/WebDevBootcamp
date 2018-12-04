var express = require("express");
var app = express();
var bodyParser=require("body-parser")

var funPic=[];

app.use(bodyParser.urlencoded({extended:true}));    
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/vaal_hazak_armor", function(req, res){
    var armor=[
           {name: "Vaal Hazak Alpha Armor Set", img: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vaal_hazak_alpha_armor_set_mhw_small.png", setBonus:"Vaal Hazak Vitlity"},
           {name: "Vaal Hazak Beta Armor Set", img: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vaal_hazak_beta_armor_set_mhw_small.png", setBonus:"Vaal Hazak Vitlity"},
           {name: "Vaal Hazak Gamma Armor Set", img: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vaal_hazak_alpha_armor_set_mhw_small.png", setBonus:"Vaal Hazak Vitlity"}
        ];
    res.render("armor", {armor, funPic});
});

app.get("/vaal_hazak_armor/new", function(req, res){
    res.render("newpic");
});

app.post("/vaal_hazak_armor", function(req, res){
    var img = req.body.img;
    funPic.push(img);
    res.redirect("./vaal_hazak_armor");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('sever starts');
});