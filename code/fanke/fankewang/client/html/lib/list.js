$(()=>{
    
/* 发送网络请求获取服务器商品数据 */
// function getDataWithPageCount() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/code/fanke/fankewang/server/Thelist.php",
        // data: "page=1",
        dataType: "json",
        success: function(data) {
            console.log(data);
            renderUI(data);
        }
    });
// }
console.log("555");
// getDataWithPageCount();
// /* 渲染页面 */
function renderUI(_data) {
    let html = _data.map((ele) => {
        return `<li class="item">
                    <div class="tupian"><img src=${ele.img}>
                    <div class="qianggou">${ele.qianggou}</div>
                    </div>
                    <div class="title">${ele.title}</div>
                    <div class="price ">售价￥<strong>${ele.sprice}</strong></div>
               
            </li>
        `
    }).join("");
    let oul = `<ul>${html}</ul>`
    $(".Listpp").html(oul);
}  


 /* 先给页面添加点击事件，当点击的时候获取页码值，根据该值发送网络请求 */
 $("#page").on("click", "a", function() {
    getDataWithPage($(this).text());
    $(this).addClass("active").siblings().removeClass("active");
})


})