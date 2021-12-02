const express= require("express");
const BodyParser=require("body-parser");
const { application } = require("express");

const app=express();

app.use(BodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html");
    
});
app.post("/",function(req,res){
   res.sendFile(__dirname+"/success.html");
})

app.listen(3000,function(){
    console.log("server is up and running");
})