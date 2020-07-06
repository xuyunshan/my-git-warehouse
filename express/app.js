'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: false
}));
app.use(bodyParser.json({limit: '10mb'}));

app.get('/test',function(req,res,next){
    res.send('1234')
})

app.listen('8765');
console.log('|| 正在监听:');
