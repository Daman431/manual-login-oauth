const express = require('express');
const request = require('request')

const app = express();

app.use(express.static('public'))
app.set("view engine","hbs")

const client_id = "3006758226031506"
const url = "https://www.facebook.com/v3.3/dialog/oauth?client_id="+client_id+"&redirect_uri=https://localhost:8000/index"

 

app.get("/index",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    console.log(req);
    res.redirect(url);

})



app.listen("8000")