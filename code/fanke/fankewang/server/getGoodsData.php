<?php
# 01-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","fanke");

# 获取参数
$page = ($_REQUEST["page"] -1 ) * 20;
$type = $_REQUEST["sortType"];

# 02-查询获取数据库所有的数据
if($type == 0)
{
  $sql = "SELECT * FROM goods LIMIT $page, 20";
}elseif($type == 1){
  $sql = "SELECT * FROM goods ORDER BY price DESC LIMIT $page, 20";
}else{
  $sql = "SELECT * FROM goods ORDER BY price ASC LIMIT $page, 20";
}

$result = mysqli_query($db,$sql);
# 03-把数据库中的获取所有数据转换为JSON返回
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>