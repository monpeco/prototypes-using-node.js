var express = require('express');

var app = express();

var port = process.env.PORT;

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});

app.get('/', function(request, response){
    response.send('Express Hello, World!');
});

app.get('/test', function(request, response){
    response.send('Hello there');
});