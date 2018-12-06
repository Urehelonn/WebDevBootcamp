var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/cats", { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);
//add new cat to database

var catsSchema= new mongoose.Schema({
    name: String,
    age: Number,
    msg: String
});

var Cat=mongoose.model("Cat", catsSchema);

var george = new Cat({
    name:"Georage",
    age:"11",
    mas:"Hi Rat!"
});

george.save(function(err,cat){
    if(err){
        console.log("something went wrong");
    }
    else{
        console.log("cat saved!");
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("error!");
    }
    else{
        console.log("find cat:");
        console.log(cats);
    }
});