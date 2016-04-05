//business logic
function Ticket(name, timeOfDay, userAge) {
  this.movie = name;
  this.time = timeOfDay;
  this.age = userAge;
  this.cost;
}

Ticket.prototype.processTicket = function() {

  // parse movie for whitespace
  // parse time as float

  //var declaration
  var movie = this.movie.length;
  // var age = parseInt(this.age);
  // var time = parseInt(this.time);
  var switchCase; //rating


  var randomCost = Math.floor( (Math.random() * (movie)) + 8 )  ;
  // var randomCost = Math.random() ;
//by time of day && movie name, determine cost

  //matnee any show is six bucks
  if( this.time < 6 ){
    this.cost = "6 dollars before 6";
  } else if ( this.time > 6) {
    this.cost = randomCost + " dollars at " + this.time + " O'clock";
  }


// get rating from movie by length
  switch( movie % 10 ){
    // multiple switchcases
    case 0:
        var switchCase = "G";
        break;
    case 1:
        var switchCase = "G";
        break;
    case 2:
        var switchCase = "PG";
        break;
    case 3:
        var switchCase = "PG";
        break;
    case 4:
        var switchCase = "PG-13";
        break;
    case 5:
        var switchCase = "PG-13";
        break;
    case 6:
        var switchCase = "R";
        break;
    case 7:
        var switchCase = "R";
        break;
    case 8:
        var switchCase = "R";
        break;
    case 9:
        var switchCase = "R";
        break;
  }

  console.log(switchCase)
//by rating test age, fail return "you are too young"
  if (this.age < 17 && switchCase === "R"){
    this.cost = "you are too young";
  } else if (this.age < 13 && switchCase === "PG-13"){
    this.cost = "you are too young";
  }

  console.log(this.cost)

};




// function resetFields() {
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }

// user interface logic
$(document).ready(function() {


  $("#new-ticket").submit(function(event) {
    event.preventDefault();

    var  inputName = $("#movieName").val();
    var  inputTime = $("#timeOfDay").val();
    var  inputAge = $("#yourAge").val(); //parse int here
    var newTicket = new Ticket(inputName,inputTime,inputAge);
    // console.log(newTicket)

    newTicket.processTicket();

    $("#tickets").append("<li><span class='contact'>" + newTicket.movie + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newTicket.movie);
      $(".first-name").text(newTicket.movie);
      $(".last-name").text(newTicket.time + " O'clock");
      $(".outAge").text(newTicket.age);
      $(".outCost").text(newTicket.cost);

    });


  });
});
