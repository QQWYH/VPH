<?php

/* 1、连接数据库 */
header("content-type: text/html;charset=utf-8");
$db = mysqli_connect("localhost", "root", "root", "vph");
if (!$db) {
  die('连接错误');
}
$sql = "SELECT car.*,id,img,logo,price,goodsname FROM car , nvgoodslist WHERE car.goodsid = nvgoodslist.id";
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>