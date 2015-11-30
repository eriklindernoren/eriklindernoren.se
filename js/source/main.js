// Functions 

$(document).ready(function(){

    $(window).bind('scroll',function(e){
    parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#mountainHolder2').css('transform','translateY('+Math.round(((scrolled*.25)))+'px)');
        $('#mountainHolder').css('transform','translateY('+Math.round(((scrolled*.5)))+'px)');
    }

    $('#aboutRight').css({'height': $('#aboutText').height() + 'px'});
    $('.projects').css({'height': getProjDivHeight() + 'px'});


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

    var beenSetUp = false;
    if(!beenSetUp){
        setupStars();
        //setStarShine();
    }
    function setupStars(){

        var placing = [
        [20,60],
        [45,55],
        [20,35],
        [25,85],
        [15,75],
        [45,15],
        [25,10],
        [15,25],
        [10,50],
        [50,25],
        [60,40],
        [60,85],
        [50,70],
        ];
        for(i = 0; i < 13; i++){
            var star = $('#s' + (i+1));
            var top = placing[i][0];
            var left = placing[i][1];
            $(star).css({'top': top + '%', 'left': left + '%'});
        }
        beenSetUp = true;
    }

    // function setStarShine(){
    //     window.setInterval(starShine, 500);
    // }

    // function starShine(){
    //     var i = Math.floor((Math.random() * 12) + 0);
    //     var star = '#s' + (i+1);
    //     $(star).addClass("shine");
    // }



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
        // for(var i = 0; i < projDivs.length; i++){
        //     var $elem = $(projDivs[i]);
        //     if($elem.height() > height){
        //         height = $elem.height();
        //     }
        // }
        var biggestHeight = $('#div4').height();
        var offsetFromHeader = $('#projectHeader').position().top + $('#projectHeader').height();

        // return height + offsetFromHeader + 190;
        return biggestHeight + offsetFromHeader + 170;
    }

                    //     <a id="ethcircle" href="javascript:void(0)" data-target="2"><img src="images/ethcircle.png" alt=""></img></a>
                    // <a id="mapapp" href="javascript:void(0)" data-target="1"><img src="images/mapapp.png" alt=""></img></a>
                    // <a id="site" href="javascript:void(0)" data-target="4"><img src="images/site.png" alt=""></img></a>
                    // <a id="sonus" href="javascript:void(0)" data-target="3"><img src="images/sonus.jpeg" alt=""></img></a>
                    // <a id="moodi" href="javascript:void(0)" data-target="5"><img src="images/moodi.png" alt=""></img></a>
    
    //Slide divs in project section
    var currentDiv = 4;
    $('#div4').css({'opacity': '1', 'z-index': '3'});
    $(".slideDir").on('click', function(){
        var dir = $(this).attr("id");

        if(dir == "slideRight") {
            var lastDiv = currentDiv;

            currentDiv = parseInt(currentDiv) - 1;

            if(currentDiv == 0) {
                currentDiv = 5;
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
                }).addClass("slideInFromLeftPro");
                $this.css({'opacity': '1', 'z-index': '3'});
            },200);

        }else{
            var lastDiv = currentDiv;
            currentDiv = parseInt(currentDiv) + 1;
            if (currentDiv == 6){
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

$('#projImages a').hover(function(){
    $(this).css({'transform':'translateY(-30px)'});
    var prototypes = $("#projImages a").not(this);
    for(var i = 0; i < prototypes.length; i++){
        var elem = prototypes[i];
        if(parseInt($(elem).css("z-index")) > parseInt($(this).css("z-index"))){
            $(elem).css({'opacity':'0.1'});
        }
    }

}, function(){
    $("#projImages a").css({'transform':'translateY(0)', 'opacity': '1'});
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
            $('.projects').css({"margin-bottom": "700px"});
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

// var periscopeIfMozilla = function(){
//     if($.browser.mozilla){
//         $('.eduPeriscope > div').removeClass('schoolImg');
//         $('.eduPeriscope').css({
//             'background-image': 'url("../images/zurich1.jpeg")',
//             'background-position': 'center center',
//             'background-attachment': 'fixed',
//             'background-size': 'cover'
//         });
//     }
// }


// periscopeIfMozilla();


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
        var navPos = "down";
        function navAndScrollButtonsOnScroll(){

            var distTop = $(window).scrollTop();
            if(distTop > 200 && window.innerWidth > 668){
                $('.scrollToTop').css({"transform": "translateY(-100px)"});
            }
            else{
                $('.scrollToTop').css({'transform': 'translateY(100px)'});
            }
        }
});

var lastUsed;
var isShowing = false;
function showWork(){
    $('#contact').hide();
    var _this = '.' + $(this).children('.workButton').children('a').data("target");
    // $('#popDownWrapper').css({'height': $(_this).outerHeight()+180+'px'});
    $('#popDownWrapper').css({'height': $(".ericsson").outerHeight()+180+'px'});
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
            $('.experience').css({'box-shadow': 'none'});
            $('.bigButton > div').css({'box-shadow': '0px 0px 0px 0px rgb(0,0,0)'});
            next(); 
        });
        isShowing = false;
    }else {
        $(_this).css({'opacity': '1', 'z-index': '3'});
        $(_this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideDown");
        }).addClass("slideDown");
        isShowing = true;
        $('.experience').css({'box-shadow': '0px 6px 10px -2px rgb(20,20,20)'});
        $('.bigButton > div').css({'box-shadow': '0px 6px 10px -2px rgb(40,40,40)'});
    }
    lastUsed = _this;
}



var projImagesLoaded = false;
function scrollAnimations(){
    var scrolledY = $(window).scrollTop();
    whatBackground(scrolledY);

    var appearFromBottomList = [['.eduTimeline h1']];

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

    // var timelineItems = $('.time');
    // for(var i = 0; i < timelineItems.length; i++){
    //     var elem = timelineItems[i];
    //     if(isFullyScrolledIntoView(elem)){
    //         if((i%2)==0)
    //             $(elem).addClass("appearFromRight");
    //         else
    //             $(elem).addClass("appearFromLeft");

    //     }
    // }

    var eduSumSeparators = $('.eduSummary .eduBorder');
    for(var i = 0; i < eduSumSeparators.length; i++){
        var elem = eduSumSeparators[i];
        if(isFullyScrolledIntoView(elem)){
            $(elem).addClass("growToFull");
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


    // if(isFullyScrolledIntoView('#aboutSeparator')){
    //     $('#aboutSeparator').addClass("expandFromBottom30");
    // }

    if(isFullyScrolledIntoView('#eduTimelineWrapper .eduBorder')){
        $('#eduTimelineWrapper .eduBorder').addClass("expand20");
    }

    // if(isPartlyScrolledIntoView('#mac')){
    //     $('#mac').addClass("appearFromRightInBackground");
    // }

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
    var slidesInProject =  $('.projects').offset().top + $('.projects').height() - 100;

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