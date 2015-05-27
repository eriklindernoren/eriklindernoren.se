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
        }, 800);       
       }else{
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    }
});

    $('#projectHeader').fitText(1.2, { minFontSize: '20px', maxFontSize: '45px' });
    $('.workButton > h1').fitText(1.2, { minFontSize: '18px', maxFontSize: '40px' });

    $('#startImg').backstretch("./images/desk1.jpeg");
    $('#schoolImg').backstretch("./images/liu.jpeg");




    var whatBackground = function(scrolledY){

        var distToEdu = $('.education').offset().top - $(window).height();
        var distToProj = $('.projects').offset().top - 200;
        var distToCont = $('#contact').offset().top - $(window).height();

        if(window.innerWidth > 568){
            if(scrolledY < distToEdu){
                $('#schoolImg').hide();
                $('#startImg').show();
            }else if(scrolledY > distToEdu && scrolledY < distToProj){
                $('#startImg').hide();
                $('#schoolImg').show();
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

        if(window.innerWidth > 568){
            var distToEdu = $('.education').offset().top - $(window).height();
            var distToProj = $('.projects').offset().top - 200;
            var distToAbout = $('.about').offset().top - $(window).height();

            if(scrolledY > distToEdu){

                var temp = Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 700);

                $('.educationContainer > .eduSummary').css({'transform': 'translate3d(' + temp + 'px, 20px, 0px)'});
                $('.educationContainer > .eduSummary').css({'-webkit-transform': 'translate3d(' + temp + 'px, 20px, 0px)'});
                $('.educationContainer > .eduSummary').css({'-moz-transform': 'translate3d(' + temp + 'px, 20px, 0px)'});

                $('.educationContainer > .eduTimeline').css({'transform': 'translate3d(' + Math.abs(temp) + 'px, 20px, 0px)'});
                $('.educationContainer > .eduTimeline').css({'-webkit-transform': 'translate3d(' + Math.abs(temp) + 'px, 20px, 0px)'});
                $('.educationContainer > .eduTimeline').css({'-moz-transform': 'translate3d(' + Math.abs(temp) + 'px, 20px, 0px)'});
            }
            else if(scrolledY > distToAbout){
                var temp = Math.min(0, scrolledY - $('.about').offset().top + $(window).height() - 700);

                $('#hello').css({'transform': 'translate3d(' + temp + 'px, 20px, 0px)'});
                $('#hello').css({'-webkit-transform': 'translate3d(' + temp + 'px, 20px, 0px)'});
                $('#hello').css({'-moz-transform': 'translate3d(' + temp + 'px, 20px, 0px)'});
            }
        }
    });

var up = true;
$('.showNav').click(function(){
    if(up){
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
    var _this = '.' + $(this).data("target");
    if(isShowing && _this != lastUsed){
        $(lastUsed).fadeOut(400);
        $(_this).fadeIn(400);
    }
    else if(isShowing){
        $('#popDownWrapper').slideUp(400);
        $(lastUsed).fadeOut(400);
        isShowing = false;
    }else {
        $(_this).fadeIn(400);
        $("#popDownWrapper").slideDown(400);
        isShowing = true;
    }
    lastUsed = _this;
}

var hoverWorkButtons = function(){

    $('.experience > h1').css({
        "color": "rgb(243,134,48)",
        "transition": "color 150ms linear"
    });
    $(this).css({
        "box-shadow": "0px 0px 10px rgba(180,180,180,0.8)",
        "transform": "scale(1.1)",
        "-webkit-transform": "scale(1.1)",
        "-ms-transform": "scale(1.1)",
        "-moz-transform": "scale(1.1)",
        "-o-transform": "scale(1.1)"
    });
    $(this).children('h1').css({
        'color': 'rgba(0,0,0,0.2)',
        'font-weight': '700'
    });
}

var stopHoverWorkButtons = function(){
    $(this).css({
        "box-shadow": "none",
        "transform": "scale(1)",
        "-webkit-transform": "scale(1)",
        "-ms-transform": "scale(1)",
        "-moz-transform": "scale(1)",
        "-o-transform": "scale(1)"
    });
    $('.experience > h1').css({
        "color": "rgba(170,170,170,0.4)",
        "transition": "color 150ms linear"
    });
    $(this).children('h1').css({
        'color': 'rgba(130,130,130,0.4)',
        'font-weight': '300'
    });
}

    //$('.workButton').click(function(){$(this).hide();});    
    $('.workButton').click(showWork);

    $('.workButton').hover(hoverWorkButtons, stopHoverWorkButtons);


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
            $('.projects').css({"margin-bottom":$('#contact').height() + "px"});
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

        if(distTop > lastDistTop && distTop > 400 && !isHover){
         $('#navbar').fadeOut(800);
     }
     else if(scrollDif > 20 && window.innerWidth > 925){
         $('#navbar').fadeIn(800);
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


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
    settings = $.extend({
      'minFontSize' : Number.NEGATIVE_INFINITY,
      'maxFontSize' : Number.POSITIVE_INFINITY
  }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
    };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

  });

};

})( jQuery );