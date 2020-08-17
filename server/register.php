<?php
// header('Content-Type:text/html;charset=utf-8');
$username=$_REQUEST["name"];
$password=$_REQUEST["pass"];
// 连接数据库
$db=mysql_connect("localhost","root","root");
// 选择数据库
// mysql_select_db("vph");
mysql_select_db("vph");
// 定义插入语句
 $sql="INSERT INTO user(username, password) VALUES ('$username','$password')";
// // 执行SQL语句 
 mysql_query($sql);
 // 获取影响行数
 $count=mysql_affected_rows();
 if($count==1){
     $arr=array("error"=>0,"msg"=>"注册成功");
 }else {
    $arr=array("error"=>1,"msg"=>"注册失败");
 }
 echo json_encode($arr);
?>