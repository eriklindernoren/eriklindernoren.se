// Functions 

$(document).ready(function(){

    // Cache
    var startscreenHeight = screen.height - 80;
    


    
    new WOW().init();
    // Animate to div 
    $(document).on('click','.navbuttons', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        if(target == "#contact"){
         $('html, body').animate({
            scrollTop: $(document).height()
        }, 800, "easeOutSine");       
     }else{
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, "easeOutSine");
    }
});


    $('#startImg').backstretch("./images/desk1.jpeg");
    $('#schoolImg').backstretch("./images/liu.jpeg");




    var whatBackground = function(scrolledY){

        var distToEdu = $('.education').offset().top - $(window).height();
        var distToProj = $('.projects').offset().top - 200;
        var distToCont = $('#contact').offset().top - $(window).height();

        if(window.innerWidth > 568){
            if(scrolledY < distToEdu){
                $('#startImg').show();
                $('#schoolImg').hide();
                $('#contact').hide();
            }else if(scrolledY > distToEdu && scrolledY < distToProj){
                $('#startImg').hide();
                $('#schoolImg').show();
                $('#contact').hide();
            }
            else{
                $('#schoolImg').hide();
                $('#startImg').hide();
                $('#contact').show();
            }
        }else{
            $('#schoolImg').hide();
            $('#startimg').hide();
        }
    }



    // Scroll animations
    $(window).scroll(function() {
        var scrolledY = $(window).scrollTop();
        whatBackground(scrolledY);

        var distToEdu = $('.education').offset().top - $(window).height();
        var distToProj = $('.projects').offset().top - 200;
        var distToAbout = $('.about').offset().top - $(window).height();

        // if(scrolledY > distToAbout){
        //     if(window.innerWidth <= 925){
        //         var temp = Math.min(0, scrolledY - $('.about').offset().top + $(window).height() - 400);
        //     }
        //     else var temp = Math.min(0, scrolledY - $('.about').offset().top + $(window).height() - 700);

        //     $('#hello').css({'transform': 'translate3d(' + temp + 'px, 0px, 0px)'});
        //     $('#hello').css({'-webkit-transform': 'translate3d(' + temp + 'px, 0px, 0px)'});
        //     $('#hello').css({'-moz-transform': 'translate3d(' + temp + 'px, 0px, 0px)'});
        // }


        if(scrolledY > distToEdu){
            if(window.innerWidth <= 925){
                var swoop = -Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 900);
            }else var swoop = -Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 700);

            $('.educationContainer > .eduTimeline').css({'transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
            $('.educationContainer > .eduTimeline').css({'-webkit-transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
            $('.educationContainer > .eduTimeline').css({'-moz-transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
        }

        if(scrolledY > distToEdu){
            if(window.innerWidth <= 925){
                var swoopX = Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 400);            
            }else
                var swoopX = Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 700);            

            var swoopY = -swoopX / 3;

            $('.educationContainer > .eduSummary').css({'transform': 'translate3d(' + swoopX + 'px,0px, 0px)'});
            $('.educationContainer > .eduSummary').css({'-webkit-transform': 'translate3d('+swoopX+'px, ' + swoopY + 'px, 0px)'});
            $('.educationContainer > .eduSummary').css({'-moz-transform': 'translate3d('+swoopX+'px, ' + swoopY + 'px, 0px)'});
       

        }
    });

var up = true;
$('.showNav').click(function(){
    if(up){
        $('.lowerMNavList').css({
            "display": "-webkit-box",
            "display": "-ms-flexbox", 
            "display": "-webkit-flex",
            "display": "flex" 
        });
        $('.lowerMNavList').hide();        
        $('.lowerMNavList').slideDown(400);
        up = false;
    }else{
        $('.lowerMNavList').slideUp(400);
        up = true;
    }
});





var lastUsed;
var isShowing = false;
var showWork = function(){
    var _this = '.' + $(this).children('.workButton').children('a').data("target");
    if(isShowing && _this != lastUsed){
        $('#popDownWrapper').slideUp(400, "easeInSine");
        $(lastUsed).hide();
        $('#popDownWrapper').slideDown(400, "easeOutSine");
        $(_this).delay(300).fadeIn(400);
    }
    else if(isShowing){
        $('#popDownWrapper').slideUp(400, "easeInSine");
        $(lastUsed).fadeOut(400);
        isShowing = false;
    }else {
        $(_this).fadeIn(400);
        $("#popDownWrapper").slideDown(400, "easeOutSine");
        isShowing = true;
    }
    lastUsed = _this;
}

var hoverWorkButtons = function(){

    $('.experience > h1').css({
        "color":  "rgb(140,140,140)",
        "transition": "color 150ms linear"
    });
}

var stopHoverWorkButtons = function(){
    $('.experience > h1').css({
        "color": "rgb(170,170,170)",
        "transition": "color 150ms linear"
    });
}

    //$('.workButton').click(function(){$(this).hide();});    
    $('.flip3d').click(showWork);

    $('.flip3d').hover(hoverWorkButtons, stopHoverWorkButtons);


    var currentDiv = 4;
    $(".slideDir").on("click", function(){

        var dir = $(this).attr("id");
        $('#div' + currentDiv).hide();
        if(dir == "slideRight") {
            currentDiv -= 1;
            if(currentDiv == 0) currentDiv = 4;
        }else if(dir == "slideLeft"){
            currentDiv += 1;
            if (currentDiv == 5)currentDiv = 1;
        }
        $('#div' + currentDiv).fadeIn(1000);
    });

    $('.about').ready(function(){



    });


    var prevScreenWidth;
    var setupWindowSize = function(){
        if(window.innerWidth > 568){
            if(prevScreenWidth <= 568){
                $('#contact').css({
                    "display": "block",
                    "z-index": "0",
                    "position": "fixed"
                });
            }        
            $('.projects').css({"margin-bottom":$('#contact').height() - 20 + "px"});
        }else{
            $('.projects').css({"margin-bottom": "0px"});
            $('#contact').css({
                "display": "block",
                "z-index": "2",
                "position": "relative"
            });
        }

        whatBackground($(window).scrollTop());



        if(window.innerWidth <= 925 && prevScreenWidth > 925){
            $('#navbar').fadeOut(600);
            $('#mobileNav').fadeIn(600);
        }else if(window.innerWidth > 925 && prevScreenWidth <= 925){
            $('#mobileNav').fadeOut(600);            
            $('#navbar').fadeIn(600);
        }
        prevScreenWidth = window.innerWidth;
    }

    setupWindowSize();
    $(window).resize(setupWindowSize);




    // Show navigation background, "scroll to top"-button
    var lastDistTop = 0;
    $(document).scroll(function(){
        var distTop = $('body').scrollTop();
        var scrollDif = lastDistTop - distTop;
        var isHover = $('#navbar').is(":hover");
        var navBackground = startscreenHeight - 80;

        if(distTop > lastDistTop && distTop > 200 && !isHover){
           $('#navbar').fadeOut(800);
        }
        else if(scrollDif > 10 && window.innerWidth > 925){
            $('#navbar').css({'background-color': 'rgba(0,0,0,0.5)'});
            $('#navbar').fadeIn(800);
        }
        if(window.innerWidth <= 925 && distTop > lastDistTop && distTop > 200){
            $('#mobileNav').fadeOut(800);
        }else if(window.innerWidth <= 925 && scrollDif > 10){
            $('#mobileNav').fadeIn(800);
        }

        if(distTop > 300 && window.innerWidth > 568){
            $('.scrollToTop').fadeIn(400);
        }
        else{
            $('.scrollToTop').fadeOut(400);
        }
        lastDistTop = distTop;
    });
});
