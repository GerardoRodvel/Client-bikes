const express = require('express');
const path = require('path');
const expressPath = require('express-path')

const app = express();

app.use(express.static(__dirname+'/dist/Client-bikes'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Client-bikes/index.html'));
});

app.listen(process.env.PORT || 8080);