


$(function () {

    $(window).scroll(function(event){
        var h= $(window).scrollTop();
       if(h>200){
           $(".tool").addClass("h")
       }else{
           $(".tool").removeClass("h")
       }

    });
    console.log($("#toor-bar"))
    $('#toor-bar').click(function(event){
        $('html,body').animate({scrollTop:0}, 800);
    });


    // 注册
    $('#zhu,.bg,.close').click(function(e){
        e.preventDefault();
        $('.zhuce-content').toggleClass('show');
        $('.bg').toggleClass('show');
    });



   
        var w=$(window).width();
        if(w<768){
            $('.zhuce-content').addClass('show1');
            $(".bg").addClass("show1");
        }
        if(w<600){
            $(".tool").css({
                display:"none"
            })
        }
        if(w<500){
         $(".snow-container").empty();
        }
    



    // toggle切换
    //
    // $(".togg").click(function (e) {
    //     $(".left").toggleClass("left-move");
    //     $(".right").toggleClass("right-show");
    //
    // })

    $(".left").delegate(".togg","click",function(){
        if($(".left").hasClass("left-move")) {
            $(".left").removeClass("left-move");
            $(".right").removeClass("right-show");
        }else {
            $(".left").addClass("left-move");
            $(".right").addClass("right-show");

        }


    });



    })