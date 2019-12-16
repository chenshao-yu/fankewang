<?php
$db = mysqli_connect("127.0.0.1","root","","fanke");
$sql = "SELECT * FROM list ";
$result = mysqli_query($db,$sql);
//分页  x / 20   向上取整
$count = ceil(mysqli_num_rows($result) /20);
echo '{"count":'.$count."}";
?>