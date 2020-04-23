var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("GoodBye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("/r/:something", function(req,res){
    var something = req.params.something;
    res.send("WELCOME TO THE " + something.toUpperCase() + " PAGE!!!");
});

app.get("/r/:something/comments/:id/:title", function(req,res){
    res.send("WELCOME TO COMMENTS PAGE!!!");
});

// for any other request
app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!!");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log("BLAH BLAH BLAH");
});