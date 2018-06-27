var express = require('express');

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("main");

});

app.listen(3000,function(req,res){

    console.log("Server has started");
});
