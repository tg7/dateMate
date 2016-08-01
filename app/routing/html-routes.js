var path = require('path');

// Below features three GET routes for the main root directory and the /info and /survey page which displays their info

module.exports = function(app) {

    app.get('/', function(request, response){
        response.sendFile(path.join(__dirname + '../public/home.html'));
    });

    app.get('/info', function(request, response){
        response.sendFile(path.join(__dirname + '../public/info.html'));
    });

    app.get('/survey', function(request, response){
        response.sendFile(path.join(__dirname + '../public/survey.html'));
    });

// A default USE route that leads to the home.html page

    app.use(function(request, response){
        response.sendFile(path.join(__dirname + '../public/home.html'));
    });

}