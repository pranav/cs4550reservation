<?php

header("Content-Type: application/json");
require("lib.php");

$q = query("SELECT * FROM conference_rooms");
$json = array();
while($row = mysql_fetch_assoc($q)){
  $json[] = $row;
}

echo json_encode($json);

?>
