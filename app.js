const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
let items = ["Make sure to love band","Make sure to love Matthew Chan","Make sure to love Cyber"];
let workItems = ["Programming", "Practice your instrument", "Cyber"]

const app = express();
app.set('view engine', 'ejs');

//Body Parser stuff.
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


//Making the date and stuff.
var formatted_date = date.getDate();
console.log(formatted_date);
console.log(date.getDay())



app.get("/", function(req,res){
  res.render('list', {listTitle: formatted_date, items: items});
});

app.get("/about", function(req,res){
  res.render('about');
});

app.get("/work", function(req,res){
  res.render('list', {listTitle: "Work", items: workItems});
});

app.post("/", function(req,res){
  let newItem = req.body.input.entry;
  if (req.body.list === "Work"){
    workItems.push(newItem);
    res.redirect("/work");
  }
  else{
    items.push(newItem);
    res.redirect("/");
  }



});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
