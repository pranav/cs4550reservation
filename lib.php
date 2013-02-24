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


?>
