const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname,"/assets")));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"views/thankYou.html"));
});

app.listen("9004",(req,res)=>{
    console.log("Server started");
})