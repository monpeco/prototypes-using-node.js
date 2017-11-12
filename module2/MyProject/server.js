var express = require('express');
var app = express();
var port = process.env.PORT;

app.listen(port, function(){
    console.log('MyProject listening port ' + port);
});

app.get('/', function(request, response){
    response.send('MyProject - Home');
});

app.get('/items', function(request, response){
    response.send('This function will return a list of all stored items');
});

app.get('/index', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(request, response){
    response.sendFile(__dirname + '/public/about.html');
});

app.get('/order', function(request, response){
    response.send('This function will return the information about the the web site');
});

