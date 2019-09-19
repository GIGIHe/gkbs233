$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".navs span").each(function(index){
        $(this).click(function(){
            $(this).addClass('on').siblings('span').removeClass('on');
             $(".tabw").hide().eq(index).fadeIn(200);
        })
    })
    var timer = setInterval(function(){
        var num = Math.floor(Math.random()*10);
        $(".con1 p").removeClass("hover")
        $(".con1 p").eq(num).addClass("hover")
    },2000)
})