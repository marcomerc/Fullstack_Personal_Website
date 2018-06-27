var express = require('express');

var app = express();
app.set("view engine", "ejs");

app.get("/", function(){
    console.log("testing main");

});

app.listen(3000,function(){

    console.log("Server has started");
});
