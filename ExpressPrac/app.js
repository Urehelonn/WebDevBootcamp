var express = require("express");
var app=express();

app.get('/', function(req, res){
    let key='Hi, welcome.';
    console.log(key);
    res.send(key);
});

app.get('/speak/:animal', function(req, res){
    let sound={
        pig: 'Oink',
        dog: 'Woof',
        ox: 'Moo'
    }
    let key=req.params.animal;
    res.send(key+': \''+sound[key]+'\'');
});

app.get('/repeat/:word/:num', function(req, res){
    let key=req.params.word;
    for(let i=0;i<Number(req.params.num);i++){
        console.log(req.params.word);
        key+='\n'+req.params.word;
    }
    res.send(key);
});

app.get('*', function(req, res){
    let key='Wut exactly are you looking for?';
    console.log(key);
    res.send(key);
});

app.listen(process.env.PORT, process.env.IP);