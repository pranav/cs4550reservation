// Add conference room using the standard object
function add_conference_room(room){
  $('#conference-room-container').append('<div class="conference-room"><img src="'+room.image+'"><h2>'+room.name+'</h2><ul><li>Capacity: '+room.capacity+'</li></ul><div class=".clear"></div></div>');
}

function add_form_conference_rooms(){
  $('.conference-room').each(function(k,v){
    $(this).append('<h3>Reserve</h3><form class="form-inline conference-form" action=process.php method=POST><input class="date span2" type="date" name="date" placeholder="Date"> <input  class="input-small" type="time" name="time" placeholder="Time"> <input class="btn btn-primary" type="submit" value="Submit"></form>');
  });
}

// Get data from the data.json file and put on page
$.getJSON("data.json", function(data){
  for(i in data.rooms){
    add_conference_room(data.rooms[i]);
  }
  add_form_conference_rooms();
  $('.conference-form').submit(function(e){
    e.preventDefault();
    var date = $($(this).children()[0]).val();
    var time = $($(this).children()[1]).val();
    $(this).append('<p>You entered: '+date+' at '+time+'.</p>');
  });
});
