<?php
require('lib.php');

if($_POST['room'] != NULL && $_POST['date'] != NULL) {
  $id = get_conference_room_id($_POST['room']);
  $_POST['date'] = htmlentities(strip_tags($_POST['date']));
  if(strlen($_POST['date']) != 10) return 1;
  else
    query("INSERT INTO schedule VALUES ('$id', '{$_POST['date']}')");
  return 1;
}


?>
