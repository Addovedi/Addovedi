const path = require('path');
const express = require('express');
const app = express();
const cards = require("./content/info");

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/",(req,res) => {
    let arr = cards.cards;
    res.render("home",{arr});
})

app.listen(8080, ()=>{
    console.log("Listening on port 8080!!!");
})