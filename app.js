var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;

// Campgrounds array, name and image
var campgrounds = [
    {name: "Red Rock", image:"https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
    {name: "Yosemite", image:"https://newhampshirestateparks.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name: "Samon Creek", image:"http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
    {name: "Pinewood Landing", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vagamon_Pine_Forest.jpg/210px-Vagamon_Pine_Forest.jpg"},
    {name: "Pinewood Landing", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vagamon_Pine_Forest.jpg/210px-Vagamon_Pine_Forest.jpg"},
    {name: "Samon Creek", image:"http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg"},
    {name: "Yosemite", image:"https://newhampshirestateparks.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name: "Red Rock", image:"https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"}
]

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs")

app.get("/", function(req, res){
    // Home page
    console.log("Home page")
    res.render("landing")
});

app.get("/campgrounds", function(req, res){
    console.log("Campgrounds page GET")
    res.render("campgrounds", {campgrounds:campgrounds})
});

app.post("/campgrounds", function(req, res) {
    // Get data from form and add to campgrounds array    
    console.log("Campgrounds POST")
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    
    // Redirect back to campgrounds
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res) {
    // render form
    console.log("New campgrounds page")
    res.render("new.ejs");
});

app.listen(port, () => console.log(`YelpCamp listening on http://localhost:${port}!`))