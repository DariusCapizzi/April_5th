//business logic
function Ticket(name, timeOfDay, userAge) {
  this.movie = name;
  this.time = timeOfDay;
  this.age = userAge;
}

Ticket.prototype.processTicket = function() {
  this.movie
  this.time
  this.age
  // parse movie for whitespace

  //var declaration

  var age = parseInt(this.age)
  var cost  //return value
  var switchCase  //rating


// get rating from movie
  switch(movie.length % 10){
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

//by rating test age, fail return "you are too young"
  if (age < 17 && switchCase === "R"){
    cost = "you are too young";
  } else if (age < 13 && switchCase === "PG-13"){
    cost = "you are too young";
  } 

//by time of day && movie name, determine cost

  //matnee
  if( timeOfDay<6 ){
    return 6;
  }

// retur
  return cost;


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
    var  inputAge = $("#yourAge").val();
    var newTicket = new Ticket(inputName,inputTime,inputAge);
    console.log(newTicket)


    $("ul#contacts").append("<li><span class='contact'>" + newTicket.processTicket() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });


  });
});
