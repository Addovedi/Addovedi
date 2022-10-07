const path = require('path');
const express = require('express');
const app = express();
const cards = require("./content/info");

let arr = cards.cards;

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/home",(req,res) => {
    const title = "home";
    res.render("home",{arr,title});
})

app.get("/home/:title", (req,res) => {
    const { title } = req.params;
    // console.log(title);
    const department = arr.find((c) => c.title === title);
    if(department){
        // console.log(department);
        res.render("depdetails",{department,title});
        // var temp = depdetails.render({ clickHandler: "func1();" });
    }
    else{
        res.status(404);
        res.send("<h1> 404 File not Found </h1");
    }
})
app.get("/brochure",(req,res)=>{
    res.render("brochure")
})
app.get("/timetable",(req,res)=>{
    res.render("timetable");
})

app.get("/*",(req,res) =>{
    res.status(404);
    res.send("<h1 style='text-align: center;'>404 File not Found </h1");
})



app.listen(process.env.PORT || 8080, ()=>{
    console.log("Listening on port 8080!!!");
})