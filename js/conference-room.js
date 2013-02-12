// Add conference room using the standard object
function add_conference_room(room){
  $('#conference-room-container').append('<div class="conference-room"><img src="'+room.image+'"><h2>'+room.name+'</h2><ul><li>Capacity: '+room.capacity+'</li></ul><div class=".clear"></div></div>');
}

function add_form_conference_rooms(){
  $('.conference-room').each(function(k,v){
    $(this).append('<form class="form-inline" action=process.php method=POST><h3>Reserve</h3><input class="input-small" type="text" name="date" placeholder="Date"> <input  class="input-small" type="text" name="time" placeholder="Time"> <a href="#" class="btn btn-primary">Submit</a></form>');
  });
}

// Get data from the data.json file and put on page
$.getJSON("data.json", function(data){
  for(i in data.rooms){
    add_conference_room(data.rooms[i]);
  }
  add_form_conference_rooms();
});
