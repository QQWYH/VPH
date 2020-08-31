<?php
/* 1、连接数据库 */
header("content-type: text/html;charset=utf-8");
$db = mysqli_connect("localhost", "root", "root", "vph");
if (!$db) {
  die('连接错误');
}
$good_id=$_REQUEST["url"];
/* 2、执行添加操作 */
/* 先检查当前的商品在购物车中是否已经存在，如果不存在那么就执行插入操作，否则应该执行修改的操作 num +1 */
$sql="SELECT * FROM car WHERE id = $good_id";
$result = mysqli_query($db,$sql);
$num = mysqli_num_rows($result);
 if($num == 0){ 
  $sql = "INSERT INTO car(id,username,num) VALUES ('$good_id','$user',1)";
}elseif($num == 1){
  $sql = "UPDATE car SET num =num +1 WHERE id = $good_id AND username = $user";
}
$retval = mysqli_query($db,$sql);
$retval = mysqli_query($db,$sql);
if (!$retval) {
  die('添加到购物车失败');
}
echo "添加成功";
?>