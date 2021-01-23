var btn=document.getElementById("save");
    btn.onclick=function(){
        var name=document.getElementById("user_name").value;
        var phone=document.getElementById("user_phone").value;
        var email=document.getElementById("user_email").value;
        var idCard=document.getElementById("user_idCard").value;
        var password=document.getElementById("user_password").value;
        var password_again=document.getElementById("user_password_again").value;
        const regex_name = new RegExp('^[a-zA-Z0-9\u4e00-\u9fa5_-]{1,6}$');
        const regex_phone = new RegExp('^[1]([3-9])[0-9]{9}$');
        const regex_email = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$');
        const regex_idCard1 = new RegExp('^([1-6][1-9]|50)([0-9]{4})(18|19|20)([0-9]{2})((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)([0-9]{3})([0-9Xx])$');
        const regex_idCard2 = new RegExp('^([1-6][1-9]|50)([0-9]{6})((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)([0-9]{3})$');
        const regex_password = new RegExp('^.*(?=.*[0-9]{2,})(?=.*[A-Z])(?=.*[a-z])(?=.*[#&*?@])(?=.{9,15}).*$');
        if(regex_name.test(name)==false){
            alert("昵称错误，请填写正确昵称");
        }
        if(regex_phone.test(phone)==false){
            alert("电话错误，请输入正确号码");
        }
        if(regex_email.test(email)==false){
            alert("邮箱错误，请输入正确邮箱");
        }
        if(regex_idCard1.test(idCard)==false && regex_idCard2.test(idCard)==false){
            alert("身份证错误，请输入正确身份证");
        }
        if(regex_password.test(password)==false){
            alert("密码错误，请输入正确密码");
        }
        if(password_again != password){
            alert("两次密码不一致，请重新输入");
        }
        if(password_again == password && regex_name.test(name)==true && regex_phone.test(phone)==true && regex_email.test(email)==true && (regex_idCard1.test(idCard)==true || regex_idCard2.test(idCard)==true) && regex_password.test(password)==true){
            alert("保存成功");
        }
 }