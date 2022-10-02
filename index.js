const path = require('path');
const express = require('express');
const app = express();
const cards = require("./content/info");

let arr = cards.cards;

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/home",(req,res) => {
    res.render("home",{arr});
})

app.get("/home/:title", (req,res) => {
    const { title } = req.params;
    console.log(title);
    if(title){
        const department = arr.find((c) => c.title === title);
        // console.log(department);
        res.render("depdetails",{department});
    }else{
        res.redirect('/home');
    }
})
app.listen(8080, ()=>{
    console.log("Listening on port 8080!!!");
})