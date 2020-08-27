<?php
$db = mysqli_connect("localhost", "root", "root", "vph");
$ids=$_REQUEST["url"];
$sql="SELECT * FROM nvgoodslist where id=$ids";
$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>