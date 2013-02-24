<?php
require("lib.php");

if($_GET['room'] != NULL){
  $id = get_conference_room_id($_GET['room']);
  $result = query("SELECT * FROM schedule WHERE id = '$id'");
  $return = array();
  while($row = mysql_fetch_array($result)){
    $return[] = $row['date'];
  }
  echo json_encode($return);
}

?>
