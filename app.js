var express = require('express');
var mongoose = require("mongoose")
var app = express();

mongoose.connect("mongodb://localhost/Gallery");
app.set("view engine", "ejs");
// the schema of the ballery
var GallerySchema = new mongoose.Schema({
  Photo: String,
  Caption: String,
  created: {type: Date, default: Date.now}
});
var Gallery = mongoose.model("Gallery", GallerySchema);

Gallery.create({
  Photo: String,
  Caption: String,
  created: {type: Date, default: Date.now}


});


app.get("/", function(req,res){
    res.render("main");

});

app.listen(3000,function(req,res){

    console.log("Server has started");
});
