$(() => {
    let defaulval = "default";
    new Promise(function (resolve, reject) {
        /* 发送网络请求获取页码数量 */
        yemashuliang()
        resolve()
    }).then(function () {
        yema(1, defaulval)

    })

    function yemashuliang() {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/code/fanke/fankewang/server/page.php",
            dataType: "json",
            success: function (response) {
                // console.log(response);
                let count = response.count;
                let html = "";
                for (let i = 0; i < count; i++) {
                    html += `<a href="javascript:;" class=${i == 0 ? "active":""}>${i+1}</a>`;
                }
                $("#page").html(html);

                $("#page a").click(function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    yema($(this).index() + 1);
                })
            }

        })
    }

    function yema(page, type, callBack) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/code/fanke/fankewang/server/yema.php",
            data: "page=" + page + "&type=" + type,
            dataType: "json",
            success: function (data) {
                // console.log(data);
                renderUI(data);
                if (callBack) callBack()
            }
        });
    }
    /* 发送网络请求获取服务器商品数据 */
    // /* 渲染页面 */
    function renderUI(_data) {
        let html = _data.map((ele) => {
            return `<li class="item">
                    <div class="tupian"><img src=${ele.img}>
                    <div class="qianggou">${ele.qianggou}</div>
                    </div>
                    <div class="title">${ele.title}</div>
                    <div class="price ">售价￥<strong>${ele.sprice}</strong></div>
                    <div class="bighover"><img src=${ele.img}><div class="title">${ele.title}</div>
                    <div class="shoujia"><div class="price2">售价￥${ele.sprice}</div><span>好评率<strong>100%</strong></span></div>
                    </div>
            </li>
        `
        }).join("");
        let oul = `<ul>${html}</ul>`
        $(".Listpp").html(oul);

    }
    /* 先给页面添加点击事件，当点击的时候获取页码值，根据该值发送网络请求 */
    let next = 0;
    $("#page").on("click", "a", function () {
        next = $(this).text()
        yema(next, defaulval);
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".btn-class").on("click", "span", function () {
        // console.log(this);

        defaulval = $(this).data("type")
        yema(1, defaulval);
        $("#page a").eq(0).addClass("active").siblings().removeClass("active");
    })
    // 上一页
    $(".next2").click(function () {
        next--;
        if (next <= 0) {
            next == 0
        }
        yema(next, defaulval);
        $("#page>a").eq(next - 1).addClass("active").siblings().removeClass("active");
        

    })
    $(".nexts").click(function () {
        next--;
        if (next <= 0) {
            next == 0
        }
        yema(next, defaulval);
        $("#page>a").eq(next - 1).addClass("active").siblings().removeClass("active");
       

    })
    //下一页
    $(".previous").click(function () {
        next++;
        if (next >= 2) {
            next == 2
            yema(next, defaulval);
            $("#page>a").eq(next - 1).addClass("active").siblings().removeClass("active");
           
        }
    })
    $(".nextx").click(function () {
        next++;
        if (next >= 2) {
            next == 2
            yema(next, defaulval);
            $("#page>a").eq(next - 1).addClass("active").siblings().removeClass("active");
            
        }
    })

    // 列表鼠标滑过显示大图
    $(".Listpp").on("mouseenter",".item",function(){
        $(this).children(".bighover").css("display", "block")
    })
    $(".Listpp").on("mouseleave",".item",function(){
       $(this).children(".bighover").css("display", "none")
   })
    

    /**点击列表商品获取数据并跳转至详情页 */
    $(".Listpp").on("click", ".item", function () {
        let srcx = $(this).children(".tupian")[0].querySelector("img").src
        let qgx = $(this).children().children(".qianggou").text()
        let ggx = $(this).children().children("strong").text()
        let titl = $(this).children(".title").text()
        let urlx = `src=${srcx}&qg=${qgx}&title=${titl}&gg=${ggx}`;
       
        window.location.href = "http://127.0.0.1/code/fanke/fankewang/client/html/details.html?" + urlx;
    })



})