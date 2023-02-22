const express = require('express');

var app = express();



app.get('/test',(req,res,next)=>{
console.log("Hello",req);
res.json({message: " hello"});
});



app.use('/test',(req,res,next)=>{
    console.log("Hello",req);
    res.json({message: " hello"});
    });

app.listen(8080);