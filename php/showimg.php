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

		//开始查询数据库字段
		$adv_style  = $_GET['adv_style'];
	    $img_title  = $_GET['img_title'];
	    $sql = 'select img_url  from  img_type  where  adv_style='.$adv_style.' and img_title like "%'.$img_title.'%"';
	    
	    //格式化返回的数据
	    $result = mysql_query($sql,$conn);
		$rows = array();
		while ($row = mysql_fetch_assoc($result)) {
			   $rows[] = $row;
		}
	    // 将数组转成json
	    echo json_encode($rows);	

	}
	mysql_free_result($result);
	mysql_close($conn);
?>