var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf85254794e73277dd09f49_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf85254794e73277dd09f49_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf85254794e73277dd09f49_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf85254794e73277dd09f49_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf85254794e73277dd09f49_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507441722973d29345c1_340.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.listen(3000, function(){
    console.log("The YelpCamp Server Has Started!");
});