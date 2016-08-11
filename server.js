// Required Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Enables usage of friends object
// var friends = require ('./friends.js')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// JSON Characteristics
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Created routes for server
 app.get('/', function(request, response){
        response.sendFile(path.join(__dirname + '/app/public/home.html'));
    });

 app.get('/info', function(request, response){
        response.sendFile(path.join(__dirname + '/app/public/info.html'));
    });

 app.get('/survey', function(request, response){
        response.sendFile(path.join(__dirname + '/app/public/survey.html'));
    });

//Have To Fix This Issue where CSS is not loading properly
 // app.use(express.static(process.cwd() + '../public'));

 app.use(express.static(process.cwd() + '/app/public'));
// Shows console which port we're connected to
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})


