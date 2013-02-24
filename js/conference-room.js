// Add conference room using the standard object
function add_conference_room(room){
  $('#conference-room-container').append('<div class="conference-room"><img src="http://placekitten.com/265/230"><h2>'+room.name+'</h2><ul><li>Capacity: '+room.capacity+'</li></ul><div class=".clear"></div></div>');
}

function add_form_conference_rooms(){
  $('.conference-room').each(function(k,v){
    $(this).append('<h3>Reserve</h3><form class="form-inline conference-form" action=process.php method=POST><input class="date span2" type="date" name="date" placeholder="Date"> <input class="btn btn-primary" type="submit" value="Submit"></form>');
  });
}

// Get data from the conference-rooms.php file and put on page
$.getJSON("conference-rooms.php", function(data){
  for(i in data){
    add_conference_room(data[i]);
  }
  // Add the form for the conference room
  add_form_conference_rooms();

  // Create listener on submit event which will post
  $('.conference-form').submit(function(e){
    e.preventDefault();
    var date = $($(this).children()[0]).val();
    var time = $($(this).children()[1]).val();
    var that = this;
    $.post("add-conference-room.php",
      {
        room: $(that).parent().find('h2').text(),
        date: date,
      },
      function(d){
        console.log(d);
      }
    );
  });
});
