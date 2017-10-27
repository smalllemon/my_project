<?php 
   //数据库变量法
	$mysql_server_name = 'localhost'; 
	$mysql_username = 'root'; 
	$mysql_password = 'root'; 
	$mysql_database = 'file_img'; 
  
    //连接数据库
	$conn = mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; 
 	mysql_query("set names 'utf8'"); 
 	if($conn) {
	 	mysql_select_db($mysql_database); 

		// 开始查询数据库字段
		$sql = "select * from  img_type ";
		//对返回数据进行格式化
		$result = mysql_query($sql,$conn);
	    $rows = array();
		while ($row = mysql_fetch_assoc($result)) {
		   $rows[] = $row['img_title'];
		}
 
    // 将数组转成json格式
     echo json_encode($rows);	
	}
	
	mysql_free_result($result);
	mysql_close($conn);
?>