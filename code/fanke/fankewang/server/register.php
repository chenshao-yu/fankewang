<?php
    #(1)连接数据库

    header("content-type:text/html;charset=utf-8");
$host='localhost';
$name='root';
$password='';
$database='fanke';
$conn= new mysqli($host,$name,$password,$database);
if(!$conn) {
    die('连接数据库失败'. mysqli_error($conn));
}
$phoneNum = $_REQUEST["phoneNum"];
$passwordNum = $_REQUEST["passwordNum"];
$phone = $_REQUEST["phone"];

$sql1 = "SELECT *FROM `user` WHERE username = '$phoneNum'";
$result = mysqli_query($conn,$sql1);
$obj = array("status"=>"","data"=>array("msg"=>""));

if (mysqli_num_rows($result) == 1) {
    $obj["status"] = "error";
    $obj["data"]["msg"] = "注册失败，该手机号已被注册！！";
    echo json_encode($obj,true);
}else{
    $sql = "INSERT INTO `user` (`id`,`username`,`password`,`phone`) VALUES (NULL,'$phoneNum','$passwordNum','$phone')";
    $res = mysqli_query($conn,$sql);
    $obj["status"] = "ok";
    $obj["data"]["msg"] = "恭喜您，注册成功！！";
    echo json_encode($obj,true);
}

?>