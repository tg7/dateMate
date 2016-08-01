// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require ('./path');
var friends = require ('../data/friends.js')

module.exports = function(app) {

app.get('api/friends', function (request, response) {
   response.json(friends);

});

app.post('api/info', function (request, response) {
  response.sendFile(path.join(__dirname + '../public/info.html'))
  // Add JSON Body Parser Logic to display in JSON format
});

app.post('api/survey', function (request, response) {
  response.sendFile(path.join(__dirname + '../public/survey.html'))

  console.log(request.body.name);
  console.log(request.body.scores.length);

});

};

//Have To Fix This Area

    var mate = {};
    
    var totalDifference = 0;

    console.log('Mate: ' 
      + mate.name + mate.score + mate.orientation);

    friends.push(request.body)


    // Returns the responses in JSON Format
    response.json(friends);
    response.json(mate);
