var express = require('express');
var app = express();

app.listen(3000, function (){
    console.log("Server started, running on port 3000");
});

app.get('/', function(req, res){
    
});