$(function(){

    $(".util_my").hover(function(){
        $(".util_my .my").stop().slideDown();
    },
    function(){
        $(".util_my .my").stop().slideUp();
    })//hover

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height : "400px", padding : "20px"}, 200);
    },
    function(){
        $(".d_wrap").stop().animate({height : "0", padding : "0"}, 200);

    })//hover

    //------- slick 붙이기 ---------
    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:1500,
    })// move slick

    $(".photo").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false,
    })// photo slick

    $(".banner").slick({
        autoplaySpeed:2500,
        arrows:false,
        dots:true
    })//banner slick

    $(".viewer").slick({
        autoplaySpeed:2500,
        arrows:false,
        dots:true
    })//viewer slick

    $(".store").slick({
        slidesToShow:2,
        slidesToScroll:2,
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
    })//store slick

    $(".notice").slick({
        autoplay:true,
        vertical:true,
    })//notice slick

// -------------------------------------------------


    $(".main_visual .stop").click(function(){
        if($(this).hasClass("on") == true ){
            $(this).removeClass("on");
            $(".move").slick("slickPlay");

        }else{
            $(this).addClass("on");
            $(".move").slick("slickPause");
        }//if else
    })//stop click

    $(".banner_wrap .b_play").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".banner").slick("slickPause");

        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPlay");
        }//if else
    })//b_play click

    $(".viewer_wrap .b_play").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".viewer").slick("slickPause");

        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPlay");
        }//if else
    })//b_play click

    $(".main_04 .n_stop").click(function(){
        if($(".main_04 .n_stop").hasClass("on") == true){
            $(this).removeClass("on");
            $(".notice").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".notice").slick("slickPause");

        }
    })//n_stop click
})//jQuery