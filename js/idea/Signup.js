function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;//\x00-xff区间在ASCII值中是单字节的，其他的都是双字节，replace()中两个参数，第一个为正则，xx代表替换成xx

}

function findStr(str,n){
	var tmp=0;
	for (var i = 0;i<str.length;i++) {
		if (str.charAt(i)==n) {
			tmp++;
		}
	}
	return tmp;
}


window.onload=function(){
	var alnput=document.getElementsByTagName('input');
	var oName=alnput[0];
	var pwd=alnput[1];
	var pwd2=alnput[2];
	var aP=document.getElementsByTagName('p');
	var name_msg=aP[0];
	var pwd_msg=aP[1];
	var pwd2_msg=aP[2];
	var count=document.getElementById('count');
	var aEm=document.getElementsByTagName('em');
	var name_length=0;

//1.数字、字母（不区分大小写）\w     汉字\u4e00-\u9fa5、下划线
//2.5-25字符，推荐使用中文会员名


     
     //用户名
	var re=/[^\w\u4e00-\u9fa5]/g;
     oName.onfocus=function(){
     	name_msg.style.display="block";
     	name_msg.innerHTML='<i class="ati">图标</i>4-32个字符，一个汉字为两个字符，推荐使用中文会员名。'
     }

     oName.onkeyup=function(){
     	name_length=getLength(this.value);
     	if(name_length==0){
     		count.style.visibility="hidden";
     	}
     	count.style.visibility="visible";
     	count.innerHTML=name_length+"个字符";
     	
     }

     oName.onblur=function(){
     	//含非法按字符
     	var re=/[^\w\u4e00-\u9fa5]/g;
     	if (re.test(this.value)) {
     		name_msg.innerHTML='<i class="err"></i>含有非法字符!'

     	}

     	else if(this.value==""){
     		name_msg.innerHTML='<i class="err"></i>不能为空!'
     	}

     	else if(name_length>32){
     		name_msg.innerHTML='<i class="err"></i>长度大于32个字符！'
     	}

     	else if(name_length<4){
     		name_msg.innerHTML='<i class="err"></i>长度少于4个字符！'
     	}

     	else{
     		name_msg.innerHTML='<i class="OK"></i>OK！'
     	}
     }


    /*var str="adargwwbhfjbfjhbdhjbhfbfc";
	var re=/(a[d-g]){2}/i;
	alert(re.test(str));*/

    //密码
    pwd.onfocus=function(){
    	pwd_msg.style.display="block;"
    	pwd_msg.innerHTML='<i class="ati"></i>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号。'
    }

    pwd.onkeyup=function(){

        //大于5 中
    	if(this.value.length>5){
    		aEm[1].className="active";
    		pwd2.removeAttribute("disabled");
    		pwd2_msg.style.display="block";
    	}
    	else{
    		aEm[1].className="";
    		pwd2.setAttribute("disabled","disabled");
    		pwd2_msg.style.display="none";
    	}

        //大于10  相同
    	if (this.value.length>10) {
    		aEm[2].className="active";
    	}
    	else {
    		aEm[2].className="";
    	}
    }

    pwd.onblur=function(){
    	var m=findStr(pwd.value,pwd.value[0]);
    	var re_n=/[^\d]/g;//匹配数字
    	var re_t=/[^a-zA-Z]/g;

    	//不能为空
    	if(this.value==""){
    		pwd_msg.innerHTML='<i class="err"></i>不能为空！';
    	}

    	//不能用相同字符
    	else if(m==this.value.length){
    		pwd_msg.innerHTML='<i class="err"></i>不能使用相同字符！';
    	}

    	//长度应为6-16个字符
    	else if(this.value.length<6||this.value.length>16){
    		pwd_msg.innerHTML='<i class="err"></i>长度应为6-16个字符！';
    	}

    	//不全为数字
    	else if(!re_n.test(this.value)){
    		pwd_msg.innerHTML='<i class="err"></i>不能全为数字！';
    	}

    	//不能全为字母
    	else if(!re_t.test(this.value)){
    		pwd_msg.innerHTML='<i class="err"></i>不能全为字母！';
    	}

    	//OK
    	else{
    		pwd_msg.innerHTML='<i class="ok"></i>OK！';
    	}
    }

    //确认密码
    pwd2.onblur=function(){
    	if (this.value!=pwd.value) {
    		pwd2_msg.innerHTML='<i class="err"></i>两次输入密码不一致！';
    	}
    	else{
    		pwd2_msg.innerHTML='<i class="ok"></i>OK！';
    	}
    }


}