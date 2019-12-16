 /*控制导航栏*/
 $(".daohanglan>li").hover(function(){
    $(this).children(".subNav").stop().slideToggle(400)
})
/*微信二维码*/
$(".minweixin").hover(function(){
    $(".weixin").slideToggle(5)
})
/*搜索框获取焦点后清除内容*/
$("#sousuo").focus(function(){
    $(this).val(" ")
})
/* 楼层回顶部 */
$(".BayWindow").click(function(){
     document.documentElement.scrollTo({
                top:0,
                behavior: "smooth" 
                }) 
})
/* */