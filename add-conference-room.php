<?php
require('lib.php');

if($_POST['room'] != NULL && $_POST['date'] != NULL) {
  $id = get_conference_room_id($_POST['room']);
  query("INSERT INTO schedule VALUES ('$id', '{$_POST['date']}')");
  return 1;
}


?>
