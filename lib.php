<?php

# Connect to the mysql database
function connect(){
  $con = mysql_connect("localhost", "root", "dickcheese");
  mysql_select_db("cs4550");
  return $con;
}

# Connect and query the mysql database
function query($q){
  connect();
  $res = mysql_query($q);
  return $res;
}

# Convert name of conference room into its ID
function get_conference_room_id($name){
  $result = query("SELECT * from conference_rooms where name = '$name'");
  $id = mysql_fetch_assoc($result);
  return $id['id'];
}

?>
