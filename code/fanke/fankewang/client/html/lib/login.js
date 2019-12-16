$(()=>{
    

let captcha1 = new Captcha({
    dotNum: 10,
    lineNum: 20,
    fontSize: 40,
    length: 2,
    // content: "我你她它塔谁睡水税"
});
let code;
captcha1.draw(document.querySelector('#captcha'), r => {
    console.log(r, '验证码1');
    code = r.toUpperCase();
});
// ************
$(".form-item>h3").click(function() {
    var usernameNum = $("#usernameID").val();
    var passwordNum = $("#phoneyanID").val();
    $(".form-item>h3").text("验证中…")
console.log(usernameNum,passwordNum);

    $.ajax({
        type: "post",
        url: "http://127.0.0.1/code/fanke/fankewang/server/login.php",
        data: {usernameNum,passwordNum},
        dataType: "json",
        success: function (response) {
            if(response.status == "ok") {
                alert("登录成功，即将跳转至首页")
                $(".form-item>h3").text("登录成功")
                window.location.href = "./shouye.html"
            }else{
                alert(response.msg);
                $(".form-item>h3").text("登录失败,请再次登录")
            }
        }
    });
})


})