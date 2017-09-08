// require
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// global
var app = express();
var port = 3001;
var inventory = ['apples', 'orages'];

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// spin server
app.listen(port, function(){
    console.log('Listening on port -->', port);
});

app.get('/', function(request, response){
    console.log('Base URL hit!');
 
    
    response.sendFile(path.resolve('public/views/index.html'));

});

app.get('/message', function (request, response) {
    response.send(inventory);

});

app.post('/message', function (request, response) {
   var item = request.body.message;
   inventory.push(item);
   console.log(item);


});