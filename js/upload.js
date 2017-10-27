var initData  = {
	   	    advStyle:"",
	        imgType:"",
	        filename:"",
	        imgObjPrevie:"" ,
	        imgTitle :"" ,
	        style:["",1,2,3,4,5,6,7,8,9],
	        saveImgurl :[] ,
          	imgNumber : "" ,
          	resultData :[],
          	obj:{},
    }
    var  pageAction  = {
    	init:function(){
			pageAction.creatElement();
			pageAction.finish();
			pageAction.getTitle();
    	},
        creatElement :function(){ 
      	  	$("#advstyle").empty;
      	 	for(var i in initData.style){
				$("#advstyle").append("<option value='"+initData.style[i]+"'>"+initData.style[i]+"</option>");
      	  	}
      	  
      	},
      	uniqueArray : function (arr,result,hash) {
                for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                    if (!hash[elem]) {
                        result.push(elem);
                        hash[elem] = true;
                    }
                }   
                return result;
        },
        setImagePreview :function () {  
	        initData.imgType=document.getElementById("file").value;
	        if(initData.imgType.indexOf("\\")>0){
			    filename=initData.imgType.substring(initData.imgType.lastIndexOf("\\")+1,initData.imgType.length).split(".")[1];
			}else{
			    filename=initData.imgType;   
			}
	        var docObj=document.getElementById("file");   
	        initData.imgObjPreview=document.getElementById("preview");  
	        if(docObj.files && docObj.files[0]){   
	            initData.imgObjPreview.style.width = '350px';  
	            initData.imgObjPreview.style.height = '350px';                         
	            initData.imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);  
	        }else{  
	            docObj.select();  
	            var imgSrc = document.selection.createRange().text; 
	            var localImagId = document.getElementById("localImag");  
	            localImagId.style.width = "300px";  
	            localImagId.style.height = "120px"; 
	            try{  
	                localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";  
	                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;  
	            }catch(e){  
	                alert("您上传的图片格式不正确，请重新选择!");  
	                return false;  
	            }  
	            mgObjPreview.style.display = 'none';  
	            document.selection.empty();  
	        }  
	         return true;  
	 	}, 
	    getValue: function (value){
	    	if(value){
	    		initData.advStyle = value;
	    	}else{
	    		 initData.advStyle = 1;
	    	}
 		},
 		getTitle: function (value){
           initData.imgTitle = (value != "" ? value: " ");
        },
 		
    //     doAjax:  function(){
	 		// if($("#imgtitle").val() == ""){
	   //              alert("请输入自定义标签");
	   //              alert(initData.advStyle);
	 		// }else{
	 		// 	$.ajax({
				// 	url:"http://www.upimgfile.net/upload_image.php",
				// 	data:{
				// 		adv_style : initData.advStyle,
				// 		img_title : initData.imgTitle,
				// 		img_type  : filename,
				// 		img_url   : initData.imgObjPreview.src,
				//     },
				// 	type:'POST',
				// 	async:false,
				// 	dataType:'JSON',
				// 	success:function(data){
				// 		console.info(data);
				// 		if(data == 200 ){
	 		// 			    alert("上传成功！");
	 		// 			    $("#advstyle").val("");
	 		// 			    $("#imgtitle").val("");
	 		// 			    $("#preview").removeAttr("src");
				// 		} 
				// 	},
				// 	error:function(data){
				// 		 alert("上传成功！");
				// 		 $("#advstyle").val("");
	 		// 			 $("#imgtitle").val("");
	 		// 			 $("#preview").removeAttr("src");
				// 	},
			 //    });
 		 //    }
 	  //   },
 	    finish :function(){
			$("#submit").click(function(){
				if(initData.imgTitle  === ""){
					alert("请选择一种图片标签！");
				}else if( initData.advStyle === ""){
                    alert("请选择一种广告类型!");
				}else if( initData.imgTitle  === ""　&&　initData.advStyle === ""　){
                    alert("请选择一种广告类型和图片标签");
                }else{
                    $("#adv_style").val(initData.advStyle);
                    $("#img_title").val(initData.imgTitle);
                    $("#advstyle").val("");
	 			    $("#imgtitle").val("");
	 			    $("#preview").removeAttr("src");
				}
				});
 	    },
    }
    pageAction.init();