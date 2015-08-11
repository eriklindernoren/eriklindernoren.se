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

    $('.bigButton').click(showWork);


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
            $('.projects').css({"margin-bottom": "660px"});
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


    var appearFromBottomList = [['#resume'],['.eduTimeline h1']];

    var triggerContactAnimations = $('.projects').offset().top + $(window).height();

    if(scrolledY > triggerContactAnimations){
        $('#contactSeparator').addClass('expandFromBottom20');
    }
    // else{
    //     $('#contactSeparator').removeClass('expandFromBottom20');
    // }

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
        // else if(!bigTextFieldIsScrolledIntoView('.education')){
        //     $(elem).removeClass("appearFromRight");
        //     $(elem).removeClass("appearFromLeft");            
        // }
    }

    var eduSumSeparators = $('.eduSummary .eduBorder');
    for(var i = 0; i < eduSumSeparators.length; i++){
        var elem = eduSumSeparators[i];
        if(isScrolledIntoView(elem)){
            $(elem).addClass("growToFull");
        }
        // else if(!bigTextFieldIsScrolledIntoView('.education')){
        //     $(elem).removeClass("expand70");
        // }
    }


    var aboutTextParagraphs = $('#aboutText p');
    for(var i = 0; i < aboutTextParagraphs.length; i++){
        var elem = aboutTextParagraphs[i];
        if(isScrolledIntoView(elem)){
            $(elem).addClass("appearFromBottom");
        }
    }

    var eduSummaryTextParagraphs = $('.eduSummary p');
    for(var i = 0; i < eduSummaryTextParagraphs.length; i++){
        var elem = eduSummaryTextParagraphs[i];
        if(isScrolledIntoView(elem)){
            $(elem).addClass("appearFromBottom");
        }
    }

    if(isScrolledIntoView(".eduSummary h1")){
        $('.eduSummary h1').addClass('appearFromTop');
    }

    if(isScrolledIntoView('#aboutMe')){
        $('#aboutMe').addClass('appearFromLeft');
    }


    $('.startscreen h1').addClass('appearFromBottom');
    // else if(!bigTextFieldIsScrolledIntoView('.about')){
    //     $('#hello').removeClass('appearFromLeft');
    // }

    if(isScrolledIntoView('#slideLeft')){
        $('#slideLeft').addClass("appearFromLeft");
    }
    // else if(!bigTextFieldIsScrolledIntoView('.projects')){
    //     $('#slideLeft').removeClass("appearFromLeft");
    // }

    if(isScrolledIntoView('#slideRight')){
        $('#slideRight').addClass("appearFromRight");
    }
    // else if(!bigTextFieldIsScrolledIntoView('.projects')){
    //     $('#slideRight').removeClass("appearFromRight");
    // }

    if(isScrolledIntoView('#profileImg')){
        $('#profileImg').addClass("spinAppearance");
    }
    // else if(!bigTextFieldIsScrolledIntoView('.startscreen')){
    //     $('#profileImg').removeClass("spinAppearance");
    // }


    if(isScrolledIntoView('#projectHeader')){
        $('#projectHeader').addClass('appearFromRight');
    }

    if(isScrolledIntoView('.expUpper > h1')){
        $('.expUpper > h1').addClass("appearFromTop");
    }

    if(isScrolledIntoView('.expSeparator')){
        $('.expSeparator').addClass("expand20");
    }
    // else if(!bigTextFieldIsScrolledIntoView('.education')){
    //     $('#eduPeriscopeWrapper .eduBorder').removeClass("expand20");
    // }

    if(isScrolledIntoView('#aboutSeparator')){
        $('#aboutSeparator').addClass("expandFromBottom30");
    }
    // else if(!bigTextFieldIsScrolledIntoView('.about')){
    //     $('#aboutSeparator').removeClass("expandFromBottom30");
    // }

    if(isScrolledIntoView('#eduTimelineWrapper .eduBorder')){
        $('#eduTimelineWrapper .eduBorder').addClass("expand20");
    }

    if(bigTextFieldIsScrolledIntoView('#mac')){
        $('#mac').addClass("appearFromRightInBackground");
    }
    // else if(!bigTextFieldIsScrolledIntoView('.education')){
    //     $('#eduTimelineWrapper .eduBorder').removeClass("expand20");
    // }

    var interests = $('.interestHolder');
    for(var i = 0; i < interests.length; i++){
        var elem = interests[i];
        if(isScrolledIntoView(elem)){
            if(i < 2){
                $(elem).addClass("appearFromLeft");
            }else{
                $(elem).addClass("appearFromRight");
            }
        }
        // else if(!bigTextFieldIsScrolledIntoView('.about')){
        //     $(elem).addClass("appearFromLeft1");
        //     $(elem).addClass("appearFromLeft");
        //     $(elem).addClass("appearFromRight1");
        //     $(elem).addClass("appearFromRight");
        // }
    }

    var bigButtons = $('.bigButton');
    for(var i = 0; i < bigButtons.length; i++){
        var elem = bigButtons[i];
        if(isScrolledIntoView(elem)){
            $(elem).addClass("slideDownBig" + i);
        }
        // else if(!bigTextFieldIsScrolledIntoView('.experience')){
        //     for(var a = 0; a < bigButtons.length; a++){
        //         $(elem).removeClass("slideDownBig" + a);
        //     }
        // }
    }
}

function whatBackground(scrolledY){

    var halfStart = $(window).height()*1/2;
    var windowHeight = $(window).height();
    var shiftContact = $('.projects').offset().top
    var shiftSchool = $('.about').offset().top + $(window).height() - 200;

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

function bigTextFieldIsScrolledIntoView(elem){

    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top + 100;
    var elemBottom = elemTop + $elem.height() - 100;

    var bottomIsOnElement = (docViewBottom < elemBottom) && (docViewBottom > elemTop);
    var topIsOnElement = (docViewTop < elemBottom) && (docViewTop > elemTop);

    return bottomIsOnElement || topIsOnElement || isScrolledIntoView(elem);
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