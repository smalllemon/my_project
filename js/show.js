 var initData  = {
          imgTitle:"",
          imageItem:"",
          imgUrl:"" ,
          advStyle :[1,2,3,4,5,6,7,8,9],
          saveImgurl :[] ,
          imgNumber : "" ,
          resultData :[],
          obj:{},
          getfillImg :document.getElementsByClassName('fillImg')[0] ,
          getfillURL :document.getElementsByClassName('fill')[0],
          resultShow :document.getElementsByClassName('resultShow')[0],
    }

    var  pageAction  = {
        init:function(){
          pageAction.creatElement();
          pageAction.getImgtitle();
          pageAction.finishInterface();
          initData.getfillImg.style.display = "none";
          initData.getfillURL.style.display = "none";
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
        creatElement :function(){
            $("#advstyle").empty;
            for(var i in initData.advStyle){
                  $("#advstyle").append("<option value='"+initData.advStyle[i]+"'>"+initData.advStyle[i]+"</option>");
            }
        },
        getImgtitle :function (){
            $.ajax({
              url:"http://www.upimgfile.net/getimg_title.php",
              type:'GET',
              dataType:'JSON',
              success:function(data){
                    if(data.length > 0){
                        data = pageAction.uniqueArray(data,initData.resultData,initData.obj); 
                        console.info(data);
                        for(var x in data){
                            $("#imgtitle").append("<option value='"+data[x]+"'>"+data[x]+"</option>");  
                      }
                    }
              },
              error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        },
        getValue: function (value){
           initData.advStyle = (value =="" ? 1:value) ;
        },
        getTitle: function (value){
           initData.imgTitle = (value != "" ? value: " ");
        },
        showImg : function(){
            $.ajax({
                url:"http://www.upimgfile.net/showimg.php",
                type:'GET',
                dataType:'JSON',
                data:{
                    adv_style:initData.advStyle,
                    img_title:initData.imgTitle,
                },
                success:function(data){
                    if(data.length > 0){ 
                        initData.getfillImg.style.display = "block";
                        initData.getfillURL.style.display = "block";
                        initData.resultShow.innerHTML = "图片分类获取成功,共计"+data.length+"条数据";
                        $(".fillImg").empty();
                        for(var x in data){
                          initData.saveImgurl.push(data[x].img_url);
                          $(".fillImg").append("<li>"+
                                                  "<img src="+data[x].img_url+"  style='cursor:pointer;'/>"+
                                               "</li>"
                                             );
                        }
                        initData.imgNumber =initData.getfillImg.getElementsByTagName('img');
                        for(var i = 0;i < initData.imgNumber.length;i++){
                          initData.imgNumber[i].index=i;
                          initData.imgNumber[i].onmouseover=function(){
                            for(var i = 0;i < initData.imgNumber.length ; i++){
                                    initData.imgNumber[i].className="";
                                    initData.getfillURL.innerHTML = "";
                             }
                            this.className="select";
                            initData.getfillURL.innerHTML=initData.saveImgurl[this.index] ;
                          },
                          initData.imgNumber[i].onmouseout=function(){
                             for(var i = 0;i < initData.imgNumber.length ; i++){
                                    initData.imgNumber[i].className="";
                             } 
                          }
                        }
                    }else{
                          initData.resultShow.innerHTML = "抱歉，未查询到符合条件的图片！";
                          initData.getfillImg.style.display = "none";
                          initData.getfillURL.style.display = "none";
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                      console.info(xhr.status);
                      console.info(thrownError);
                }
            });
        },
        finishInterface :function(){
          $(".confirm").click(function(){
              $(".fillImg").empty();
              initData.resultShow.innerHTML ="" ;
              pageAction.showImg(); 
          });
        },  
  }
  pageAction.init();