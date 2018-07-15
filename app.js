var express = require('express');
var mongoose = require("mongoose")
var app = express();

mongoose.connect("mongodb://localhost/Gallery");
app.set("view engine", "ejs");
// the schema of the ballery
var GallerySchema = new mongoose.Schema({
  Photo: String,
  Caption: String,
});
var Gallery = mongoose.model("Gallery", GallerySchema);
//
// Gallery.create({
//   Photo: "http://jasmijnyoga.com/wp-content/uploads/2018/01/vogelbescherming-news-1.jpeg",
//   Caption: "bird ",
// });


app.get("/", function(req,res){
  Gallery.find({}, function(err,photos) {
    if (err) {
      console.log("error happen");
    }else {
      res.render("main", {photos: photos});
    }
  });

});

app.listen(3000,function(req,res){

    console.log("Server has started");
});
