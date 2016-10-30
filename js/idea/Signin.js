$(document).ready(function(){ 
    $("#signin").click(function(){
        $.ajax({
                // 请求发送方式
                type: 'post',
                // 验证文件
                url: '',
                // 用户输入的帐号密码
                data: {'username': $("#username").val(), 'password': $("#password").val()},
                // 异步，不写默认为True
                async: true,
                //请求成功后的回调
                success: function(data){
                    if (data){
                        alert('登录成功')
                    }else{
                        alert('帐号或密码错误');
                    }
                },
                error: function(){
                    alert('服务端异常');
                },

          });
    });

    $(function () {
               $("#changimg").click(function () {
                   DoFresh();
               });
               DoFresh();
           })
    function DoFresh() {
               var img = $("#imgValidateCode");
               img.attr("src", "" + Math.random());//添加的方法，src是生成图片的aspx的地址
           }  

  
    // 判断回车  
    function keydown(e){  
        var e = e || event;  
        if (e.keyCode==13) {  
            $("#signin").click();  
        }  
    }
}); 