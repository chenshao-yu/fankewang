$(()=>{
    $("#phoneID").val("13457028888");
    $("#phoneyanID").val("12345")
    $("#passwordID").val("123456")
    $("#passwordB").val("123456")


     $("#phoneID").blur(function(){
        let reg = /^1[3-9]\d{9}$/;
        if (!reg.test($.trim($(this).val()))) {
            $(".phonespan").text("请输入正确的手机号！").css("color","red");
        } else {
            $(".phonespan").text("");
        }
     })
     $("#phoneyanID").blur(function(){
        if ($.trim($("#phoneyanID").val())=="") {
            $(".phonespanB").text("请输入验证码").css("color","red");
        } else {
            $(".phonespanB").text("");
        }
     })
     $("#passwordID").blur(function() {
        let reg = /^[0-9a-zA-Z]{6,16}$/;
        if (!reg.test($.trim($(this).val()))) {
            $(".paswspan").text("设置的密码不符合规范！").css("color","red");
        } else {
            $(".paswspan").text("");
        }
    })
    $("#passwordB").blur(function() {
        if ($.trim($(this).val()) != $.trim($("#passwordID").val())) {
            $(".paswspanB").text("两次输入的密码不一致！！！").css("color","red");
        } else {
            $(".paswspanB").text("").css("color","green");
        }
    })
/* 实现图形验证码 */
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
$("#yanz").blur(function() {
    if ($.trim($(this).val()).toUpperCase() != code) {
        $(".yanspan").text("请输入正确的图形验证码")
    } else {
        $(".yanspan").text("")
    }
})
/* 注册的思路： */
    /* (1) 先获取按钮，添加点击事件 */
    /* (2) 检查用户名等所有信息是否都已经正确填写 */
    /* (3) 检查是否勾选同意用户协议 */
    /* (4) 如果2+3都满足，那么就应该把需要的数据作为参数提交给服务器。 */
    

    $(".form-item").click(function() {
        $("#yanz,#phoneID,#passwordID,#passwordB").trigger("blur");
        if ($(".form-group-error").length != 0) {
            alert("请输入正确的注册信息");
        }

        if ($("#protocol").is(":checked") == false) {
            alert("请阅读并同意用户协议！！！");
            $(".form-item").css("background","#9A9A9A")
        }else{
            
            $(".form-item").css("background","#b52024")
        }
        
        var phoneNum = $("#phoneID").val();
        var passwordNum = $("#passwordID").val();
        console.log(phoneNum);
        console.log(passwordNum);
        
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/fanke/fankewang/server/register.php",
            data: {phoneNum,passwordNum},
            dataType: "json",
            success: function (response) {
                if(response.status == "ok") {
                   alert("恭喜你您，注册成功");
                   window.location.href = "./login.html"
                }else{
                    alert(response.data.msg);
                }
            }
        });
        // $.ajax({
        //     type: "post",
        //     url: "http://127.0.0.1/code/fanke/fankewang/server/register.php",
        //     data: `username=${$("#usernameID").val()}&password=${$("#passwordA").val()}&phone=${$("#phoneID").val()}`,
        //     dataType: "json",
        //     success: function(data) {
        //         console.log(data);
        //         /* {status:"ok",data:{msg:"注册成功"}} */
        //         if (data.status == "success") {
        //             window.location.href = "https://www.jianke.com/";
        //         } else {
        //             alert(data.data.msg)
        //         }
        //     }
        // });
    })
/* */

// $("#loginBtnB").click(function() {
//     var phoneNum = $("#phoneNum").val();
//     console.log(phoneNum);
    
//     var passwordNum = $("#passwordNum").val();
//     $.ajax({
//         type: "post",
//         url: "http://127.0.0.1/code/fanke/fankewang/server/register.php",
//         data: {phoneNum,passwordNum},
//         dataType: "json",
//         success: function (response) {
//             if(response.status == "ok") {
//                alert("恭喜你您，注册成功");
//                window.location.href = "./login.html"
//             }else{
//                 alert(response.data.msg);
//             }
//         }
//     });
// })



})