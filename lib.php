<?php

function connect(){
  $con = mysql_connect("localhost", "root", "dickcheese");
  mysql_select_db("cs4550");
  return $con;
}

function query($q){
  connect();
  $res = mysql_query($q);
  return $res;
}

function get_conference_room_id($name){
  $result = query("SELECT * from conference_rooms where name = '$name'");
  $id = mysql_fetch_assoc($result);
  return $id['id'];
}

?>
