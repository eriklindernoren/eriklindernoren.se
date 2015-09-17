// Functions 

$(document).ready(function(){

    // Cache
    var startscreenHeight = screen.height - 80;
    

    // Animate to div 
    $(document).on('click','.navbuttons', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        
        if(target == "#aboutDown"){
            target = "#about";
        }

        if(target == "#contact"){
           $('html, body').animate({
            scrollTop: $(document).height()
        }, 700, "easeOutQuad");       
       }else{
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 700, "easeOutQuad");
    }
});

    function findNextSection(){
        var topOfWindow = $(window).scrollTop();
        var centerOfWindow = topOfWindow + $(window).height()/2;

        var education = $('.education').offset().top;
        var experience = $('.experience').offset().top;
        var projects = $('.projects').offset().top;

        if(centerOfWindow < education){
            return ".education";
        }else if(centerOfWindow < experience){
            return ".experience";
        }else if(centerOfWindow < projects){
            return ".projects";
        }else{
            return "#contact";
        }

    }

    $('.navbuttons').hover(function(){
        var navClicked = this.getAttribute('data-target');
        var jump = 0;

        if(navClicked == "about"){
            jump = 1;
        }
        else if(navClicked == "education"){
            jump = 2;
        }
        else if(navClicked == "experience"){
            jump = 3;
        }
        else if(navClicked == "projects"){
            jump = 4;
        }
        else if(navClicked == "contact"){
            jump = 5;
        }
        
        if(jump == 0)
            return;

        for(var i = 1; i < 6; i++){
            if(jump != i)
                $('#span' + i).css({"color": "transparent"});
        }
    }, function(){
        $('#message p span').css({"color": "white"});
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



    $('#scrollDown').hover(function(){
        $('#scrollDown').css({
            'background-color': 'rgb(250,250,250)',
            'color': 'rgb(20,20,20)'
        });
    }, function(){
        $("#scrollDown").css({
            'background-color': 'rgb(20,20,20)',
            'color': 'rgb(250,250,250)'
        });
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

    $('.bigButton').on("click", showWork);

    function getProjDivHeight(){

        var height = 0;
        var projDivs = $('.slideDiv');
        for(var i = 0; i < projDivs.length; i++){
            var $elem = $(projDivs[i]);
            if($elem.height() > height){
                height = $elem.height();
            }
        }

        var offsetFromHeader = $('#projectHeader').position().top + $('#projectHeader').height();

        return height + offsetFromHeader + 220;
    }
    
    //Slide divs in project section
    var currentDiv = 4;
    
    $('#div4').css({'opacity': '1', 'z-index': '3'});
    $(".slideDir").on('click', function(){
        var dir = $(this).attr("id");

        if(dir == "slideRight") {
            var lastDiv = currentDiv;

            currentDiv = parseInt(currentDiv) - 1;

            if(currentDiv == 0) {
                currentDiv = 4;
            }

            var $lastUsed = $('#div' + lastDiv);
            var $this = $('#div' + currentDiv);
            var $container = $('.projects');
            $lastUsed.css({'opacity': '0', 'z-index': '-1'});
            $lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $(this).removeClass("slideOutBottom");
            }).addClass("slideOutBottom");
            setTimeout(function(){
                $this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                    $(this).removeClass("slideInFromLeft");
                }).addClass("slideInFromLeft");
                $this.css({'opacity': '1', 'z-index': '3'});
            },200);

        }else{
            var lastDiv = currentDiv;
            currentDiv = parseInt(currentDiv) + 1;
            if (currentDiv == 5){
                currentDiv = 1;
            }

            var $lastUsed = $('#div' + lastDiv);
            var $this = $('#div' + currentDiv);
            var $container = $('.projects');

            $lastUsed.css({'opacity': '0', 'z-index': '-1'});
            $lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $(this).removeClass("slideOutLeft");
            }).addClass("slideOutLeft");
            setTimeout(function(){
                $this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                    $(this).removeClass("slideInFromBottom");
                }).addClass("slideInFromBottom");
                $this.css({'opacity': '1', 'z-index': '3'});
            },200);
        }

    }); 


$('#projImages a').on('click', function(){

    var possibleNewDiv = this.getAttribute('data-target');

    if(currentDiv != possibleNewDiv){

        var lastDiv = currentDiv;
        currentDiv = possibleNewDiv;

        $lastUsed = $('#div' + lastDiv);
        $this = $('#div' + currentDiv);

        $lastUsed.css({'opacity': '0', 'z-index': '-1'});
        $lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideOutBottom");
        }).addClass("slideOutBottom");
        setTimeout(function(){
            $this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $(this).removeClass("slideInFromLeft");
            }).addClass("slideInFromLeft");
            $this.css({'opacity': '1', 'z-index': '3'});
        },200);
    }
});


    //Done at load and every time the window is resized
    var prevScreenWidth;
    var setupWindowSize = function(){

        $('.projects').css({'height': getProjDivHeight() + 'px'});

        if(window.innerWidth > 668){
            if(prevScreenWidth <= 668){
                $('#contact').css({
                    "display": "block",
                    "position": "fixed",
                    'bottom': '0',
                    'z-index': '1'
                });
                whatBackground();
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
        $('#startImgHolder').removeClass('startImg');
        $('#startImgHolder').css({
            'background-image': 'url("../images/desk5dyed.jpeg")',
            'background-position': 'center center',
            'background-attachment': 'fixed',
            'background-size': 'cover'
        });

    }
}

var periscopeIfSafari = function(){
    if($.browser.safari){
        $('.eduPeriscope').css({
            'border-radius': '1px',
            'height': '600px',
            'border': '7px solid rgb(230,230,230)'
        });
    }
}

periscopeIfMozilla();
periscopeIfSafari();


setUpDisplayTypesForPopups();

$('#scrollDown').css({
    "transition": "0.4s linear", 
    "transform": "translateY(-5px)"
});
setTimeout(function(){
    $('#scrollDown').css({"transition": "0.2s linear"});
},400);



$(document).scroll(navAndScrollButtonsOnScroll);

        // Show navigation background, "scroll to top"-button
        var lastDistTop = $(window).scrollTop();
        var navPos = "down";
        function navAndScrollButtonsOnScroll(){
            var distTop = $('body').scrollTop();
            var scrollDif = lastDistTop - distTop;
            var navBackground = startscreenHeight - 80;

            if(distTop > 200 && window.innerWidth > 668){
                $('.scrollToTop').css({"transform": "translateY(-100px)"});
                // $('.scrollToNext').css({"transform": "translateY(-80px)"});
                // $('#scrollDown').css({
                //     "transition": "0.4s linear", 
                //     "transform": "translateY(100px)"
                // });
                // setTimeout(function(){
                //     $('#scrollDown').css({"transition": "0.2s linear"});
                // },400);

}
else{
    $('.scrollToTop').css({'transform': 'translateY(100px)'});
                // $('.scrollToNext').css({"transform": "translateY(100px)"});
                // $('#scrollDown').css({
                //     "transition": "0.4s linear", 
                //     "transform": "translateY(0)"
                // });
                // setTimeout(function(){
                //     $('#scrollDown').css({"transition": "0.2s linear"});
                // },400);

}
lastDistTop = distTop;
}
});

var lastUsed;
var isShowing = false;
function showWork(){
    var _this = '.' + $(this).children('.workButton').children('a').data("target");
    $('#popDownWrapper').css({'height': $(_this).outerHeight()+80+'px'});
    if(isShowing && _this != lastUsed){
        $(lastUsed).css({'opacity': '0', 'z-index': '-1'});
        $(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideOutRight");
        }).addClass("slideOutRight");
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



var projImagesLoaded = false;
function scrollAnimations(){
    var scrolledY = $(window).scrollTop();
    whatBackground(scrolledY);

    var appearFromBottomList = [['#resume'],['.eduTimeline h1']];

    var triggerContactAnimations = $('.projects').offset().top + $(window).height();

    for(var i = 0; i < appearFromBottomList.length; i++){
        var elements = appearFromBottomList[i];
        for(var a = 0; a < elements.length; a++){
            var elem = elements[a];
            if(isFullyScrolledIntoView(elem)){
                $(elem).addClass("appearFromBottom");
            }
        }
        
    }

    var timelineItems = $('.time');
    for(var i = 0; i < timelineItems.length; i++){
        var elem = timelineItems[i];
        if(isFullyScrolledIntoView(elem)){
            if((i%2)==0)
                $(elem).addClass("appearFromRight");
            else
                $(elem).addClass("appearFromLeft");

        }
    }

    var eduSumSeparators = $('.eduSummary .eduBorder');
    for(var i = 0; i < eduSumSeparators.length; i++){
        var elem = eduSumSeparators[i];
        if(isFullyScrolledIntoView(elem)){
            $(elem).addClass("growToFull");
        }
    }


    if($(window).innerWidth() < 668){
        if(isPartlyScrolledIntoView("#aboutText p")){
            $("#aboutText p").addClass("appearFromBottom");
        }
    }else{
        var aboutTextParagraphs = $('#aboutText p');
        for(var i = 0; i < aboutTextParagraphs.length; i++){
            var elem = aboutTextParagraphs[i];
            if(isFullyScrolledIntoView(elem)){
                $(elem).addClass("appearFromBottom");
            }
        }
    }

    if($(window).innerWidth() < 668){
        if(isPartlyScrolledIntoView(".eduSummary p")){
            $(".eduSummary p").addClass("appearFromBottom");
        }
    }else{
        var eduSummaryTextParagraphs = $('.eduSummary p');
        for(var i = 0; i < eduSummaryTextParagraphs.length; i++){
            var elem = eduSummaryTextParagraphs[i];
            if(isFullyScrolledIntoView(elem)){
                $(elem).addClass("appearFromBottom");
            }
        }
    }



    var navButtons = $('#navigationButtonWrapper a');
    for(var i = 0; i < navButtons.length; i++){
        var elem = navButtons[i];
        if(isFullyScrolledIntoView(elem)){
            $(elem).addClass("appearFromTop");
        }
    }

    if(isFullyScrolledIntoView(".eduSummary h1")){
        $('.eduSummary h1').addClass('appearFromTop');
    }

    if(isFullyScrolledIntoView('#aboutMe')){
        $('#aboutMe').addClass('appearFromLeft');
    }

    if(isFullyScrolledIntoView('.slideDir')){
        $('#projImages').addClass('appearFromBottom');
    }



    if(isFullyScrolledIntoView('#projectHeader')){
        $('#projectHeader').addClass('appearFromRight');
    }

    if(isFullyScrolledIntoView('.expUpper > h1')){
        $('.expUpper > h1').addClass("appearFromLeft");
    }


    if(isFullyScrolledIntoView('#aboutSeparator')){
        $('#aboutSeparator').addClass("expandFromBottom30");
    }

    if(isFullyScrolledIntoView('#eduTimelineWrapper .eduBorder')){
        $('#eduTimelineWrapper .eduBorder').addClass("expand20");
    }

    if(isPartlyScrolledIntoView('#mac')){
        $('#mac').addClass("appearFromRightInBackground");
    }

    var interests = $('.interestHolder');
    for(var i = 0; i < interests.length; i++){
        var elem = interests[i];
        if(isFullyScrolledIntoView(elem)){
            if(i < 2){
                $(elem).addClass("appearFromLeft");
            }else{
                $(elem).addClass("appearFromRight");
            }
        }
    }

    var bigButtons = $('.bigButton');
    for(var i = 0; i < bigButtons.length; i++){
        var elem = bigButtons[i];
        if(isFullyScrolledIntoView(elem)){
            $(elem).addClass("slideDownBig" + i);
        }
    }
}

function whatBackground(scrolledY){

    var docViewBottom = $(window).scrollTop() + $(window).height();
    var slidesInProject =  $('.slideDir').offset().top;

    if(docViewBottom > slidesInProject){
        $('#contact').show();
    }else{
        $('#contact').hide();
        if(isPartlyScrolledIntoView('.education')){
            $('.schoolImg').show();
        }else{
            $('.schoolImg').hide();
        }
    }
}

function isPartlyScrolledIntoView(elem){

    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    var bottomIsOnElement = (docViewBottom < elemBottom) && (docViewBottom > elemTop);
    var topIsOnElement = (docViewTop < elemBottom) && (docViewTop > elemTop);

    return bottomIsOnElement || topIsOnElement || isFullyScrolledIntoView(elem);
}

function isFullyScrolledIntoView(elem){

    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}