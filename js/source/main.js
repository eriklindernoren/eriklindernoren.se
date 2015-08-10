// Functions 

$(document).ready(function(){

    // Cache
    var startscreenHeight = screen.height - 80;
    

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



    //Image div in project section
    $('.imageDiv').hover(function(){
        $(this).children('.imgText').delay(150);
        $(this).children('.imgText').children('p').delay(150);
        $(this).children('.imgText').animate({'height':'20%'},200, "linear");
        $(this).children('.imgText').children('p').animate({'opacity': '1'},100,"linear");
    },function(){
        $(this).children('.imgText').animate({'height':'0'},200, "linear");
        $(this).children('.imgText').children('p').animate({'opacity': '0'},100,"linear");
    });





    // Scroll animations
    $(window).scroll(scrollAnimations);
    scrollAnimations();

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
        $('.expUpper > h1').css({"color":  "rgb(140,140,140)"});
    }

    var stopHoverWorkButtons = function(){
        $('.expUpper > h1').css({"color": "rgb(170,170,170)"});
    }

    $('.bigButton').click(showWork);
    $('.flip3d').hover(hoverWorkButtons, stopHoverWorkButtons);


    //Slide divs in project section
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

    //Done at load and every time the window is resized
    var prevScreenWidth;
    var setupWindowSize = function(){
        if(window.innerWidth > 668){
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

var periscopeIfMozilla = function(){
    if($.browser.mozilla){
        $('.eduPeriscope > div').removeClass('schoolImg');
        $('.eduPeriscope').css({
            'background-image': 'url("../images/zurich1.jpeg")',
            'background-position': 'center center',
            'background-attachment': 'fixed',
            'background-size': 'cover'
        });
    }
}
periscopeIfMozilla();


setUpDisplayTypesForPopups();

    // Show navigation background, "scroll to top"-button
    var lastDistTop = $(window).scrollTop();
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
            $('.scrollToTop').css({'transform': 'translateY(100px)'});
        }
        lastDistTop = distTop;
    });
});

var lastUsed;
var isShowing = false;
function showWork(){
    var _this = '.' + $(this).children('.workButton').children('a').data("target");
    $('#popDownWrapper').css({'height': $(_this).outerHeight()+80+'px'});
    if(isShowing && _this != lastUsed){
        $(lastUsed).css({'opacity': '0', 'z-index': '-1'});
        $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideRight");
        }).addClass("slideRight");
        $(_this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideInFromLeft");
        }).addClass("slideInFromLeft");
        $(_this).css({'opacity': '1', 'z-index': '3'});
    }
    else if(isShowing){
        $(lastUsed).css({'opacity': '0', 'z-index': '-1'});
        $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideUp");
        }).addClass("slideUp");
        $('#popDownWrapper').delay(100).queue(function (next) { 
            $(this).css('height', '0'); 
            next(); 
        });

        isShowing = false;
    }else {
        $(_this).css({'opacity': '1', 'z-index': '3'});
        $(_this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideDown");
        }).addClass("slideDown");
        isShowing = true;
    }
    lastUsed = _this;
}


function scrollAnimations(){
    var scrolledY = $(window).scrollTop();
    whatBackground(scrolledY);

    var distToEdu = $('.education').offset().top - $(window).height() + 200;
    var distToProj = $('.projects').offset().top - 200;
    var distToAbout = $('.about').offset().top - $(window).height();
    var distToExp = $('.experience').offset().top - 500;
    var distToExpLower = $('.projects').offset().top - 100;
    var distToProfileImage = $(window).outerHeight()/2; 
    var distToZurich = distToEdu + 1000;


    var eduSummaryChildren = $('.eduSummary').children();
    var eduTimelineChildren = $('.eduTimeline').children();

    var appearFromBottomList = [
    ['#hello', '#aboutSeparator', '#resume'], 
    $('#interests').children(),
    eduSummaryChildren, 
    ['.eduSummary h1', '.eduTimeline h1'] 
    ];

    for(var i = 0; i < appearFromBottomList.length; i++){
        var elements = appearFromBottomList[i];
        for(var a = 0; a < elements.length; a++){
            var elem = elements[a];
            if(isScrolledIntoView(elem)){
                $(elem).addClass("appearFromBottom");
            }
        }
        
    }

    var timelineItems = $('.time');
    for(var i = 0; i < timelineItems.length; i++){
        var elem = timelineItems[i];
        if(isScrolledIntoView(elem)){
            if((i%2)==0)
                $(elem).addClass("appearFromRight");
            else
                $(elem).addClass("appearFromLeft");

        }
    }

    var eduSumSeparators = $('.eduSummary .eduBorder');
    for(var i = 0; i < eduSumSeparators.length; i++){
        var elem = eduSumSeparators[i];
        if(isScrolledIntoView(elem)){
            $(elem).addClass("expand70");
        }
    }

    if(isScrolledIntoView('#profileImg')){
        $('#profileImg').addClass("spinAppearance");
    }

    if(isScrolledIntoView('#eduPeriscopeWrapper .eduBorder')){
        $('#eduPeriscopeWrapper .eduBorder').addClass("expand20");
    }

    if(isScrolledIntoView('#eduTimelineWrapper .eduBorder')){
        $('#eduTimelineWrapper .eduBorder').addClass("expand20");
    }

    if(isScrolledIntoView('.bigButton')){
        $('.bigButton').addClass("slideDownBig");
    }

    


//     if(scrolledY > distToEdu){
//         var goal = distToEdu + 700;
//         if(window.innerWidth <= 925){
//             var swoop = -Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 900);
//         }else {
//             if(scrolledY < goal){
//              var swoop = Math.min(0.002*Math.pow(scrolledY - goal, 2), $(window).height());                   
//          }else{
//             swoop = 0;
//         }
//     }

//     $('.educationContainer > .eduTimeline').css({'transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
//     $('.educationContainer > .eduTimeline').css({'-webkit-transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
//     $('.educationContainer > .eduTimeline').css({'-moz-transform': 'translate3d('+swoop+'px, ' + swoop + 'px, 0px)'});
// }

// if(scrolledY > distToEdu){
//     var goal = distToEdu + 700;
//     if(window.innerWidth <= 925){
//         var swoopX = Math.min(0, scrolledY - $('.education').offset().top + $(window).height() - 400);            
//     }else{
//         if(scrolledY < goal){
//             var swoopX = -Math.min(0.002*Math.pow(scrolledY - goal, 2), $(window).height());                   
//         }else{
//             swoopX = 0;
//         }
//     }


//     var swoopY = -swoopX / 3;

//     $('.educationContainer > .eduSummary').css({'transform': 'translate3d(' + swoopX + 'px,' + swoopY + 'px, 0px)'});
//     $('.educationContainer > .eduSummary').css({'-webkit-transform': 'translate3d('+swoopX+'px, ' + swoopY + 'px, 0px)'});
//     $('.educationContainer > .eduSummary').css({'-moz-transform': 'translate3d('+swoopX+'px, ' + swoopY + 'px, 0px)'});
// } 
}

function whatBackground(scrolledY){

    var halfStart = $(window).height()*1/2;
    var windowHeight = $(window).height();
    var shiftContact = $('.projects').offset().top - 100;
    var shiftSchool = $('.education').offset().top - windowHeight - 100;

    if(scrolledY > shiftContact){
        $('#contact').show();
    }else{
        $('#contact').hide();
        if(scrolledY > shiftSchool)
            $('.schoolImg').show();
        else 
            $('.schoolImg').hide();
    }
}

function isScrolledIntoView(elem){

    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}