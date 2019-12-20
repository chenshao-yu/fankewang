$(() => {


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
    $(".form-item>h3").click(function () {
        var username = $("#usernameID").val();
        var password = $("#phoneyanID").val();
        $(".form-item>h3").text("验证中…")
        console.log(username,password);

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/code/fanke/fankewang/server/login.php",
            data: { username, password },
            dataType: "json",
            success: function(response) {
                console.log(response);
                /* 检查结果：成功 ？失败 */
                // {status:"ok",data:{msg:"登录成功"}}
                if (response.status == "success") {
                    /* 存储登录数据到本地 */
                    localStorage.username = username;
                    localStorage.id = response.data.userId;
                    console.log(response);

                    window.location.href = "http://127.0.0.1/code/fanke/fankewang/client/html/Thelist2.html";
                } else {
                    alert(response.data.msg);
                }
            }
        });
    })


})