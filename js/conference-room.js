// Add conference room using the standard object
function add_conference_room(room){
  $('#conference-room-container').append('<div class="conference-room"><img src="http://placekitten.com/265/230"><h2>'+room.name+'</h2><ul><li>Capacity: '+room.capacity+'</li></ul><div class=".clear"></div></div>');
}

function add_form_conference_rooms(){
  $('.conference-room').each(function(k,v){
    $(this).append('<h3>Reserve <small><a class="schedule" href="#">See schedule</a></small></h3><form class="form-inline conference-form" action=process.php method=POST><input class="date span2" type="date" name="date" placeholder="Date"> <input class="btn btn-primary" type="submit" value="Submit"></form><div class="schedule-container"></div>');
  });
}

// Loads a schedule appended to the given div
function load_schedule(box){
  var schedule_html = "<table class=\"table table-bordered\" style=\"width:150px\"><thead><tr><td><b>Dates Reserved</b></td></tr></thead><tbody>";
  var name = $(box).find('h2').text();
  $.getJSON("loadschedule.php", {room: name}, function(s){
    for(i in s){
      schedule_html = schedule_html + "<tr><td>"+s[i]+"</td></tr>";
    }
    schedule_html = schedule_html + "</tbody></table>";
    $(box).find('.schedule-container').html(schedule_html);
  });
}

function get_schedule(name){
  var data = [];
  $.ajax({
    type: 'GET',
    url: 'loadschedule.php',
    data: {room: name},
    dataType: 'json',
    success: function(d){ data = d},
    async: false
  });
  return data;
}

// Get data from the conference-rooms.php file and put on page
$.getJSON("conference-rooms.php", function(data){
  for(i in data){
    add_conference_room(data[i]);
  }
  // Add the form for the conference room
  add_form_conference_rooms();

  // Load the schedule
  $('a.schedule').click(function(e){
    e.preventDefault();
    var box = $(this).parent().parent().parent();
    load_schedule(box);
    $(this).remove();
  });


  // Create listener on submit event which will post
  $('.conference-form').submit(function(e){
    e.preventDefault();
    var date = $($(this).children()[0]).val();
    if(date.length != 10) {alert("Invalid date. Please use YYYY-MM-DD"); return;}
    var name = $(this).parent().find('h2').text()
    var that = this;

    var current_list = get_schedule(name);
    var bool = false;
    for(i in current_list){
      if(!bool)
        bool = (date == current_list[i]);
    }


    if(bool){
      alert(name + " is already reserved for that day. Please choose a different day.");
    } else {
      $.post("add-conference-room.php",
        {
          room: name,
          date: date
        },
        function(d){
          load_schedule($(that).parent());
          $(that).remove();
        }
      );
    }
  });
});

