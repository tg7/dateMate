$(document).ready(function() {

//Validates The Info.html Page
if ($('#name').val() == null || $('#email').val() == null || $('#male').val() == null || $('#female').val() == null || $('#photo').val() == null) {
      
      alert("Please make sure to answer all of the questions!");
      return false;
    };

//Validates the Survey.html Page

for (var i = question[1]; i < question[10]; i++) {

  alert("Please make sure to answer all of the questions!");
      return false;
};

var totalScore = [];

var mate = {

  name: $('#name').val(),
  email: $('#email').val(),
  male: $('#male').val(),
  female: $('#female').val(),
  photo: $('#photo').val(),
  score: totalScore

}

console.log({mate});


});