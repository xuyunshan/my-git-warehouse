var express = require('express');
var app = express();
app.get('/test',(req,res,next)=>{
    res.send('123')
})

app.listen(8888,()=>{
    console.log('启动了')
})