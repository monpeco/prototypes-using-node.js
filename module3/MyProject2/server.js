var express = require('express');

var app = express();
    
var port = process.env.PORT;

// import sqlite3 module
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('HelloExpress.db');


app.listen(port, function(){
    console.log('My second project, this is with SQLite');
});

app.get('/', function(request, response){
   response.send('This is a message'); 
   console.log('This is a message');
});


app.get('/index', function(request, response){
    response.send('This function will return index items');
    console.log('This function will return index items');
});

app.get('/quotes', function(request, response){
    db.all("SELECT * FROM Quotes", function(err, rows){
        console.log("GET Quotes, The database currently contains the following rows: " + rows);
        response.send(rows);
    });
});

app.get('/quotes/:author', function(request, response){
    db.all("SELECT * FROM Quotes WHERE Author = ? ",
            [request.params.author], 
            function(err, rows){
                console.log("GET request for author: " + request.params.author);
                response.send(rows);
            });
});

curl -X POST rails-test-cloned-github-heroku-monpeco.c9users.io:8080/quotes -H "Content-Type: application/json" -d "{'author': 'Alguien', 'quote': 'Dijo algo'}"
app.post('/quotes', function(request, response){
    console.log("POST: to the route!");
    response.send('POST: This is a message');
});

/* Test: https://rails-test-cloned-github-heroku-monpeco.c9users.io:8080/ */