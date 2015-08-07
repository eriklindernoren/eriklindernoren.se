// Functions 

$(document).ready(function(){

    // Cache
    var startscreenHeight = screen.height - 80;
    


    
    wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,          
      mobile:       true,       // default
      live:         true        // default
  }
  );
    wow.init();
    // Animate to div 
    $(document).on('click','.navbuttons', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        if(target == "#contact"){
         $('html, body').animate({
            scrollTop: $(document).height()
        }, 800, "linear");       
     }else{
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, "linear");
    }
});
    $('#startImg').backstretch("./images/desk5dyed.jpeg");
    $('#schoolImg').backstretch("./images/zurich1.jpeg");


    $('.imageDiv').hover(function(){
        $(this).children('.imgText').delay(150);
        $(this).children('.imgText').children('p').delay(150);
        $(this).children('.imgText').animate({'height':'20%'},200, "linear");
        $(this).children('.imgText').children('p').animate({'opacity': '1'},100,"linear");
    },function(){
        $(this).children('.imgText').animate({'height':'0'},200, "linear");
        $(this).children('.imgText').children('p').animate({'opacity': '0'},100,"linear");
    });

    var whatBackground = function(scrolledY){

        var halfStart = $(window).height()*1/2;
        var windowHeight = $(window).height();
        var shiftContact = $('.projects').offset().top - 100;
        var shiftSchool = $('.education').offset().top - windowHeight;

        if(scrolledY > shiftContact){
            $('#contact').show();
        }else{
            $('#contact').hide();
            if(scrolledY > shiftSchool)
                $('#schoolImg').show();
            else 
                $('#schoolImg').hide();
        }
    }


    // Scroll animations
    $(window).scroll(function(e) {
        var scrolledY = $(window).scrollTop();
        whatBackground(scrolledY);

        var distToEdu = $('.education').offset().top - $(window).height();
        var distToProj = $('.projects').offset().top - 200;
        var distToAbout = $('.about').offset().top - $(window).height();



        if(scrolledY > distToEdu){
            var goal = distToEdu + 700;
            if(window.innerWidth <= 925){
                var swoop = -Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 900);
            }else {
                if(scrolledY < goal){
                   var swoop = Math.min(0.002*Math.pow(scrolledY - goal, 2), $(window).height());                   
               }else{
                swoop = 0;
            }
        }

        $('.educationContainer > .eduTimeline').css({'transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
        $('.educationContainer > .eduTimeline').css({'-webkit-transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
        $('.educationContainer > .eduTimeline').css({'-moz-transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
    }

    if(scrolledY > distToEdu){
        var goal = distToEdu + 700;
        if(window.innerWidth <= 925){
            var swoopX = Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 400);            
        }else{
            if(scrolledY < goal){
                var swoopX = -Math.min(0.002*Math.pow(scrolledY - goal, 2), $(window).height());                   
            }else{
                swoopX = 0;
            }
        }


        var swoopY = -swoopX / 3;

        $('.educationContainer > .eduSummary').css({'transform': 'translate3d(' + swoopX + 'px,' + swoopY + 'px, 0px)'});
        $('.educationContainer > .eduSummary').css({'-webkit-transform': 'translate3d('+swoopX+'px, ' + swoopY + 'px, 0px)'});
        $('.educationContainer > .eduSummary').css({'-moz-transform': 'translate3d('+swoopX+'px, ' + swoopY + 'px, 0px)'});
    }

});


var up = true;
$('.showNav').click(function(){
    if(up){
        $('.lowerMNavList > a').fadeIn(300);
        $('.lowerMNavList').slideDown(400, "linear");
        up = false;
    }else{
        $('.lowerMNavList').slideUp(400, "linear");
        $('.lowerMNavList > a').fadeOut(300);
        up = true;
    }
});





var hoverWorkButtons = function(){

    $('.expUpper > h1').css({
        "color":  "rgb(140,140,140)",
        "transition": "color 150ms linear"
    });
}

var stopHoverWorkButtons = function(){
    $('.expUpper > h1').css({
        "color": "rgb(170,170,170)",
        "transition": "color 150ms linear"
    });
}

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

var prevScreenWidth;
var setupWindowSize = function(){
    if(window.innerWidth > 668){
            $('#startImg').backstretch("./images/desk5dyed.jpeg");
            //$('#schoolImg').backstretch(["./images/zurich1.jpeg", "./images/liu.jpeg"], {duration:10000, fade:'slow'});
            $('#schoolImg').backstretch("./images/zurich1.jpeg");
            if(prevScreenWidth <= 668){

                $('#contact').css({
                    "display": "block",
                    "position": "fixed",
                    'bottom': '0',
                    'z-index': '2'
                });
            }        
            $('.projects').css({"margin-bottom": "620px"});
        }else{
           $('.projects').css({"margin-bottom": "0px"});
           $('#contact').css({
            "display": "block",
            "z-index": "-1",
            "position": "relative",
            'bottom': '0'
        });
       }


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

var setUpDisplayTypesForPopups = function(){

  $('.lowerMNavList').css({
    "display": "-webkit-box",
    "display": "-ms-flexbox", 
    "display": "-webkit-flex",
    "display": "flex"
});
  $('.lowerMNavList').hide(); 
}



setUpDisplayTypesForPopups();

    // Show navigation background, "scroll to top"-button
    var lastDistTop = $(window).scrollTop;
    var navPos = "down";
    $(document).scroll(function(){
        var distTop = $('body').scrollTop();
        var scrollDif = lastDistTop - distTop;
        var isHover = $('#navbar').is(":hover");
        var navBackground = startscreenHeight - 80;
        if(window.innerWidth > 925){
            if((navPos == 'down') && scrollDif < 0 && distTop > 200 && !isHover){
                $('#navbar').css({'transform': 'translateY(-75px)'});
                navPos = 'up';
            }
            else if((navPos == 'up') && (scrollDif > 20 || distTop < 200)){
                $('#navbar').css({'transform': 'translateY(0px)'});
                navPos = 'down';
            }
        }

        if(distTop > 200 && window.innerWidth > 668){
            $('.scrollToTop').css({"transform": "translateY(-100px)"});
        }
        else{
            $('.scrollToTop').css({"transform": "translateY(100px)"});
        }
        lastDistTop = distTop;
    });
});

var lastUsed;
var isShowing = false;
var showWork = function(){
    var _this = '.' + $(this).children('.workButton').children('a').data("target");
    $('#popDownWrapper').css({'height': $(_this).outerHeight()+80+'px'});
    if(isShowing && _this != lastUsed){
        $(lastUsed).css({'opacity': '0'});
        $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("popright");
        }).addClass("popright");
        $(_this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("popleft");
        }).addClass("popleft");
        $(_this).delay(1000).css({'opacity': '1'});
    }
    else if(isShowing){
        $(lastUsed).css({'opacity': '0'});
        $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("popup");
        }).addClass("popup");
        $('#popDownWrapper').delay(100).queue(function (next) { 
            $(this).css('height', '0'); 
            next(); 
        });

        isShowing = false;
    }else {
        $(_this).css({'opacity': '1'});
        $(_this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("popdown");
        }).addClass("popdown");
        isShowing = true;
    }
    lastUsed = _this;
}
