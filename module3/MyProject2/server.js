var express = require('express');

var app = express();

var port = process.env.PORT;

app.listen(port, function(){
    console.log('My second project, this is with SQLite');
});

app.get('/', function(request, response){
   response.send('This is a message'); 
});


app.get('/index', function(request, response){
    response.send('This function will return index items');
});


/* Test: https://rails-test-cloned-github-heroku-monpeco.c9users.io:8080/ */