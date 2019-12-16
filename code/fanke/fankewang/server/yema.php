<?php

$type = $_REQUEST["type"];
// # 01-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","fanke");
//获取参数
$page = ($_REQUEST["page"]-1) * 20;
//查询数据库数据的范围
$sql = "SELECT * FROM list LIMIT $page,20";
if($type == "defaul"){
    $sql = "SELECT * FROM list LIMIT $page , 20";
}elseif($type == "desc"){
    $sql = "SELECT * FROM list ORDER BY list.sprice DESC LIMIT $page , 20";
}elseif($type == "asc"){
    $sql = "SELECT * FROM list ORDER BY list.sprice ASC LIMIT $page , 20";
}
#获取数据库数据
// $sql = "SELECT * FROM list ";
$result = mysqli_query($db,$sql);
// print_r($result);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
// print_r($data);
echo json_encode($data,true)

?>