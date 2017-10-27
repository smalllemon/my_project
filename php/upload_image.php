 <?php
    // 连接数据库
    $conn=@mysql_connect("localhost","root","root")  or die(mysql_error());
    @mysql_select_db('file_img',$conn) or die(mysql_error());

    //存储数据变量 
        if ($_FILES["file"]["error"] > 0){  
            return; 
        }else{ 
            echo "Upload: " . $_FILES["file"]["name"] . "<br />";//获取文件名  
            echo "Type: " . $_FILES["file"]["type"] . "<br />";//获取文件类型  
            echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";//获取文件大小  
            echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";//获取文件临时地址  

            $adv_style  = $_POST['adv_style'];
            $img_title  = $_POST['img_title'];

            
           //自定义文件名称  
            $array=$_FILES["file"]["type"];  
            $array=explode("/",$array);  
            $filename=date("Y-m-d");//自定义文件名（测试的时候中文名会操作失败）  
  
            //文件命名 日期+随机数+类型后缀
            $filename = date("Y-m-d");
            $newname = date("Y-m-d")."-".rand(10000,99999).".".$array[1]; 
            $_FILES["file"]["name"] = $newname; 
            $addtime = time(); 
            //自定义文件名称    
            if (!is_dir("upload/".$filename))//当路径不存在 
            {  
                mkdir("upload/".$filename);//创建路径 
            } 
            $url="upload/".$filename."/"; //记录路径  
            if (file_exists($url.$_FILES["file"]["name"])){ //当文件存在 
               return; 
            }else{
               $url=$url.$_FILES["file"]["name"] ; 
                move_uploaded_file($_FILES["file"]["tmp_name"],$url);  
            }
            
            //执行sql命令   
            $sqlstr = "insert into img_type(img_url,img_name,addtime,img_type,adv_style,img_title) values('".$url."','".$newname."','".$addtime."','".$array[1]."','".$adv_style."','".$img_title."')";
            
            @mysql_query($sqlstr) or die(mysql_error());
            mysql_close($conn);
           
      } 
 ?>  

  