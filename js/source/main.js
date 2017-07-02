// Functions 

$(document).ready(function(){

    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    var coursesAreSetUp = false;
    if(!coursesAreSetUp){
        var width = Math.floor($('#edus').width() / 2) - 40;
        var courses = $('.courses');
        for(var i = 0; i < courses.length; i++){
            $(courses[i]).css({"width": width + "px"});
            var height = 0;
            $(courses[i]).children(".listWrapper").children(".courseListWrapper").each(function(){
                var newHeight = $(this).children(".courseList").height();
                if(newHeight > height){
                    height = newHeight;
                }
            });
            height += 90;
            
            var minHeight = $('.edu').height();
            $(courses[i]).css({"height": height + "px", "min-height": minHeight + "px"});
            $(courses[i]).parent().css({"height": height + "px", "min-height": minHeight + "px"});
            var semesters = $(courses[i]).children(".listWrapper").children(".courseListWrapper").length;
            $(courses[i]).children(".listWrapper").css({"height": height + "px", "width": semesters*width + "px", "min-height": minHeight + "px"});
            var courseListWrappers = $(courses[i]).children(".listWrapper").children(".courseListWrapper");
            for(var a = 0; a < courseListWrappers.length; a++){
                $(courseListWrappers[a]).css({"width": width + "px", "height": height + "px", "min-height": minHeight + "px"});
            }
        }
        coursesAreSetUp = true;
    }

    $(".showCourses").click(function() {
        var text = $(this).children("p").text();
        if(text == "Show Courses"){
            $(".showCourses").children("p").text("Show Courses");
            $(".courses").css({
                "opacity": "0", 
                "left": "-100%", 
            });
            semester = 1;
            $(this).children("p").text("Hide Courses");
            var $newCourses = $(this).parent().parent().siblings(".courseWrapper").children(".courses");
            $newCourses.children(".coursesUpper").children("p").text("Semester 1");
            $newCourses.children(".listWrapper").addClass("noTransition");
            $newCourses.children(".listWrapper").css({"transform": "translateX(0)"});
            $newCourses.children(".listWrapper")[0].offsetHeight;
            $newCourses.children(".listWrapper").removeClass("noTransition");
            $newCourses.css({
                "opacity": "1",
                "left": "40px", 
            });
        }else{
            $(this).children("p").text("Show Courses");
            var $courses = $(this).parent().parent().siblings(".courseWrapper").children(".courses");
            $courses.children(".coursesUpper").children("p").text("Semester 1");
            $courses.children(".listWrapper").addClass("noTransition");
            $courses.children(".listWrapper").css({"transform": "translateX(0)"});
            $courses.children(".listWrapper")[0].offsetHeight;
            $courses.children(".listWrapper").removeClass("noTransition");
            $courses.css({
                "opacity": "0", 
                "left": "-100%", 
            });
            coursesVisible = false;
            semester = 1;
        }
    });

    var semester = 1;
    $(".courseRight").click(function() {
        var semesters = $(this).parent().siblings(".listWrapper").children(".courseListWrapper").length;
        if(semester == semesters){
            semester = 1;
        }else{
            semester++;
        }
        var width = $($(this).parent().siblings(".listWrapper").children(".courseListWrapper")[0]).width();
        $(this).parent().siblings(".listWrapper").css({"transform": "translateX(" + (semester-1)*width*(-1) + "px)"});
        $(this).siblings("p").text("Semester " + semester);
    });

    $(".courseLeft").click(function() {
        var semesters = $(this).parent().siblings(".listWrapper").children(".courseListWrapper").length;
        if(semester == 1){
            semester = semesters;
        }else{
            semester--;
        }
        var width = $($(this).parent().siblings(".listWrapper").children(".courseListWrapper")[0]).width();
        $(this).parent().siblings(".listWrapper").css({"transform": "translateX(" + (semester-1)*width*(-1) + "px)"});
        $(this).siblings("p").text("Semester " + semester);
    });

    var menuVisible = false;
    $('#hamburger').click(function(){ 
        if(!menuVisible){
            var buttons = $('#navigationButtonWrapper a');
            setTimeout(function(){
                $(buttons[0]).css({'transform': 'translateY(0)'});
            },0);
            setTimeout(function(){
                $(buttons[1]).css({'transform': 'translateY(0)'});
            },100);
            setTimeout(function(){
                $(buttons[2]).css({'transform': 'translateY(0)'});
            },200);
            setTimeout(function(){
                $(buttons[3]).css({'transform': 'translateY(0)'});
            },300);
            setTimeout(function(){
                $(buttons[4]).css({'transform': 'translateY(0)'});
            },400);
            menuVisible = true; 

            $('#menuLine1').css({
                'width': '100%', 
                'height': 'auto', 
                'border-radius': '0', 
                'border': 'none',
                'border-bottom': '2px solid rgb(250,250,250)',
                'top': '50%', 
                'left': 'auto',
                'right': '0',
                'transform' : 'translateY(-50%) rotateZ(45deg)'
            });
            $('#menuLine4').css({
                'width': '100%',
                'bottom': 'auto',
                'top': '50%', 
                'right': '0',
                'transform' : 'translateY(-50%) rotateZ(-45deg)'
            });
            $('#menuLine2').hide();
            $('#menuLine3').hide();
        }else{
            var buttons = $('#navigationButtonWrapper a');
            setTimeout(function(){
                $(buttons[0]).css({'transform': 'translateY(-100px)'});
            },0);
            setTimeout(function(){
                $(buttons[1]).css({'transform': 'translateY(-100px)'});
            },100);
            setTimeout(function(){
                $(buttons[2]).css({'transform': 'translateY(-100px)'});
            },200);
            setTimeout(function(){
                $(buttons[3]).css({'transform': 'translateY(-100px)'});
            },300);
            setTimeout(function(){
                $(buttons[4]).css({'transform': 'translateY(-100px)'});
            },400);
            menuVisible = false;

            $('#menuLine1').css({
                'width': '16px', 
                'height': '16px', 
                'border-radius': '50%', 
                'border': '2px solid rgb(250,250,250)',
                'top': '30%', 
                'left': '0',
                'right': 'auto',
                'transform' : 'translateY(-50%) rotateZ(0)'
            });
            $('#menuLine2').hide();
            $('#menuLine3').hide();
            $('#menuLine4').css({
                    'width': '12px',
                    'bottom': '0', 
                    'right': '5px',
                    'top': 'auto',
                    'transform' : 'translateY(-50%) rotateZ(45deg)'
            });
        }
    }); 

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#mountainHolder2').css('transform','translateY('+Math.round(((scrolled*.25)))+'px)');
        $('#mountainHolder').css('transform','translateY('+Math.round(((scrolled*.5)))+'px)');
    }
    
    var resumeHover = function(){
        $('#overResume .bulb').css({'border-color': '#F39C12', 'background-color': '#FDE3A7', 'box-shadow': '0px 0px 10px 0px #F39C12'});
        $('#overResume .bulbShine').css({'border-color': 'white'});
        $('#pSquare1').css({'border-color': '#F64747', 'background-color': 'rgba(246,71,71,0.2)'});
        $('#pSquare2').css({'border-color': '#03A678', 'background-color': 'rgba(3,166,120,0.2)'});
        $('#pCircle1').css({'border-color': '#F39C12', 'background-color': 'rgba(243,156,18,0.2)'});
        $('#pCircle2').css({'border-color': '#6BB9F0', 'background-color': 'rgba(107,185,240,0.2)'});
        
        setTimeout(function(){
            $('#underResume .bulb').css({'border-color': '#F39C12', 'background-color': '#FDE3A7', 'box-shadow': '0px 0px 10px 0px #F39C12'});
            $('#underResume .bulbShine').css({'border-color': 'white'});
            $('#screen').css({'background-color': 'rgb(250,250,250)'});
            $('.computerLine').css({'border-color': 'rgb(160,160,160)'});
            $('.hiddenCompLine').css({'visibility': 'visible'});
        },100);
        setTimeout(function(){
            $('.coffeeSteam').css({'transform': 'translateY(-50%) translateX(-50%)', 'opacity': '1'});
            $('#b9').css({'transform': 'translateX(-50%) rotateZ(10deg) translateY(-2px)', 'right': '50px', 'bottom': '40%'});
        },400);
    }
    var resumeNotHover = function(){
        $('#overResume .bulb').css({'border-color': 'black', 'background-color': 'rgb(250,250,250)', 'box-shadow': 'none'});
        $('#overResume .bulbShine').css({'border-color': 'transparent'});
        $('#screen').css({'background-color': 'rgb(230,230,230)'});
        $('.computerLine').css({'border-color': 'white'});
        $('.hiddenCompLine').css({'visibility': 'hidden'});
        $('#underResume .bulb').css({'border-color': 'black', 'background-color': 'rgb(250,250,250)', 'box-shadow': 'none'});
        $('#underResume .bulbShine').css({'border-color': 'transparent'});
        $('#selfPortrait div').css({'border-color': 'black', 'background-color': 'transparent'});
        $('.coffeeSteam').css({'transform': 'translateY(23px) translateX(-50%)', 'opacity': '0'});

        $('#b9').css({'transform': 'translateX(-50%) rotateZ(-90deg)', 'right': '76px', 'bottom': '15px'});
    }

    $('#resume').hover(resumeHover, resumeNotHover);

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
        }, 2000, "easeInOutQuart");
        setTimeout(function(){$('.schoolImg').hide();},2000);
       }else{
        $('html, body').animate({
            scrollTop: $(target).offset().top 
        }, 1200, "easeInOutQuart");
    }
});


    function getNavButtonColor(dist){
        var topOfWindow = $(window).scrollTop();
        var elementDist = dist;

        var about = $('.about').offset().top;
        var eduSummary = $('.education').offset().top;
        var eduTimeline = $('#eduTimelineWrapper').offset().top - 350;
        var experience = $('.experience').offset().top;
        var projects = $('.projects').offset().top;
        var contact = $('.projects').offset().top + $('.projects').height() + 80;

        if(elementDist < eduSummary){
            return "rgb(200,200,200)";
        }else if(elementDist < eduTimeline){
            return "white";
        }else if(elementDist < projects){
            return "rgb(200,200,200)";
        }else if(elementDist < contact){
            return "white";
        }else{
            return "rgb(200,200,200)";
        }
    }

    function getNavButtonHoverColor(dist){
        var topOfWindow = $(window).scrollTop();
        var elementDist = dist;

        var about = $('.about').offset().top;
        var eduSummary = $('.education').offset().top;
        var eduTimeline = $('#eduTimelineWrapper').offset().top - 350;
        var experience = $('.experience').offset().top;
        var projects = $('.projects').offset().top;
        var contact = $('.projects').offset().top + $('.projects').height() + 80;

        if(elementDist < eduSummary){
            return "black";
        }else if(elementDist < eduTimeline){
            return "rgb(200,200,200)";
        }else if(elementDist < projects){
            return "black";
        }else if(elementDist < contact){
            return "rgb(200,200,200)";
        }else{
            return "black";
        }
    }

    $('#navigationButtonWrapper .navbuttons').hover(function(){

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

        $('#span' + jump).css({"opacity": "1", "transform": "translateX(-20px)"});
        
    }, function(){
        $('#message p').css({"opacity": "0", "transform": "translateX(0)"});
    });

    $('#scrollNavigationButtonWrapper .navbuttons').hover(function(){
        var distTop = $(window).scrollTop();
        if(distTop > 550 && window.innerWidth > 1300){
            var dist = $(this).offset().top;
            var color = getNavButtonHoverColor(dist);
            $(this).children('p').css({'color': color});
            $(this).children('.navDot').css({
                "width": "3px",
                "height": "8px",
                "background-color": color,
                "transform": "translateY(-50%) translateX(50%) rotateZ(180deg)",
            });
            $(this).children('.navDotDelayed').delay(1400).css({
                "width": "10px",
                "height": "3px",
                "background-color": color,
            });
        }
    }, function(){
        var dist = $(this).offset().top;
        var color = getNavButtonColor(dist);
        $(this).children('p').css({'color': color});
        $(this).children('.navDot').css({
            "width": "3px",
            "height": "6px",
            "background-color": color,
            "transform": "translateY(-50%) translateX(50%) rotateZ(0)",
        });
        $(this).children('.navDotDelayed').css({
            "width": "3px",
            "height": "3px",
            "background-color": color,
        });
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
                }).addClass("slideInFromLeft");
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
    $(this).css({'transform':'translateY(-20px)'});
    var hover_z_index = parseInt($(this).css("z-index"));
    var prototypes = $("#projImages a").not(this);
    for(var i = 0; i < prototypes.length; i++){
        var elem = prototypes[i];
        if(parseInt($(elem).css("z-index")) > hover_z_index){
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
        if(window.innerWidth > 668){
            if(prevScreenWidth <= 668){
                whatBackground();
            }        
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

var resumeIfSafari = function(){
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
        // Safari
        if (ua.indexOf('chrome') == -1) {
            $('#resume').css({"border-radius": "2px"});
        }
    }
}

resumeIfSafari();

    $(document).scroll(navAndScrollButtonsOnScroll);
        // Show navigation background, "scroll to top"-button
        var navPos = "down";
        function navAndScrollButtonsOnScroll(){

            // Show / hide navigation buttons
            var distTop = $(window).scrollTop();
            if(distTop > 550 && window.innerWidth > 1300){
                var buttons = $('#scrollNavigationButtonWrapper a');
                setTimeout(function(){
                    $(buttons[0]).css({'transform': 'translateX(0)'});
                },0);
                setTimeout(function(){
                    $(buttons[1]).css({'transform': 'translateX(0)'});
                },100);
                setTimeout(function(){
                    $(buttons[2]).css({'transform': 'translateX(0)'});
                },200);
                setTimeout(function(){
                    $(buttons[3]).css({'transform': 'translateX(0)'});
                },300);
                setTimeout(function(){
                    $(buttons[4]).css({'transform': 'translateX(0)'});
                },400);
            }else{
                var buttons = $('#scrollNavigationButtonWrapper a');
                setTimeout(function(){
                    $(buttons[0]).css({'transform': 'translateX(200px)'});
                },0);
                setTimeout(function(){
                    $(buttons[1]).css({'transform': 'translateX(200px)'});
                },100);
                setTimeout(function(){
                    $(buttons[2]).css({'transform': 'translateX(200px)'});
                },200);
                setTimeout(function(){
                    $(buttons[3]).css({'transform': 'translateX(200px)'});
                },300);
                setTimeout(function(){
                    $(buttons[4]).css({'transform': 'translateX(200px)'});
                },400);
            }

            // Change the color of the navigation bar buttons by their current background color
            for(var i = 0; i < $(".scrollNavHeader").length; i++){
                var elem = $(".scrollNavHeader")[i];
                var dot = $(elem).next();
                var elemDist = $(elem).offset().top;
                var color = getNavButtonColor(elemDist);
                $(elem).css({'color': color});
                $(elem).siblings().css({'background-color': color});
            }

            // Change the color of the scroll up button by its current background color
            var scrollDist = $("#scrollUp").offset().top;
            var color = getNavButtonColor(scrollDist);
            $('#scrollUp').css({'border-color': color});
            $('#scrollUp > div > i').css({'color': color});
            $('#scrollUp > div > p').css({'color': color});

            // Show / hide the scroll up button
            if(distTop > 300 && window.innerWidth > 668){
                $('#scrollUp').css({"transform": "translateY(0) translateX(0)", "opacity": "1"});
            }
            else{
                $('#scrollUp').css({'transform': 'translateY(150px) translateX(0)', "opacity": "1"});
            }
        }
});


var lastUsed;
var isShowing = false;
function showWork(){
    $('#contact').hide();
    var _this = '.' + $(this).children('.workButton').children('a').data("target");
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
            next(); 
        });
        isShowing = false;
    }else {
        $(_this).css({'opacity': '1', 'z-index': '3'});
        $(_this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass("slideDown");
        }).addClass("slideDown");
        isShowing = true;
        $('.experience').css({'border-bottom': '1px solid black'});
    }
    lastUsed = _this;
}



var projImagesLoaded = false;
var penAnimationDone = false;
function scrollAnimations(){
    var scrolledY = $(window).scrollTop();
    whatBackground(scrolledY);

    var triggerContactAnimations = $('.projects').offset().top + $(window).height();

    // if(!penAnimationDone && isFullyScrolledIntoView($('.timelineDot')[3])){
        // $('#penHolder').css({'top': '-39px', 'left': '88px', 'transform': 'rotateZ(-30deg)'});
        // setTimeout(function(){
        //     $('#penHolder').css({'transition': '1.4s ease', 'top': '110px'});
        //     $('#arrowLine').css({'height': '100%'});
        // },800);
        // setTimeout(function(){
        //     $('#arrowHead').css({'width': '50px', 'bottom': '18px', 'left': '7px', 'border-color': '#F64747'});
        //     $('#penHolder').css({'transition': '1.0s ease', 'top': '79px', 'left': '42px', 'transform': 'rotateZ(-25deg)'});
        // },2600);
        // setTimeout(function(){
        //     $('#penHolder').css({'transition': '0.6s ease', 'top': '110px', 'left': '88px', 'transform': 'rotateZ(-30deg)'});
        // },3500);
        // setTimeout(function(){
        //     $('#arrowHead').css({'height': '50px', 'bottom': '36px', 'left': '25px'});
        //     $('#penHolder').css({'transition': '1.0s ease', 'top': '69px', 'left': '133px', 'transform': 'rotateZ(-35deg)'});
        // },4100);
        // setTimeout(function(){
        //     $('#penHolder').css({'transition': '0.5s ease', 'top': '130px', 'left': '130px', 'transform': 'rotateZ(15deg)'});
        // },5100);
    //     penAnimationDone = true;
    // }

    if(isPartlyScrolledIntoView('#timelineDotHeader')){
        $('#timelineDotHeader').addClass('rotate360').addClass('appearFromTopCentered');
    }

    if(isFullyScrolledIntoView('.slideDir')){
        $('#projImages').addClass('appearFromBottom');
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
    var slidesInProject =  $('.projects').offset().top + $('.projects').height() - 100;

    if(docViewBottom > slidesInProject){
        $('#contact').show();
        $('.schoolImg').hide();
    }else{
        $('#contact').hide();
        if(isPartlyScrolledIntoView("#popDownWrapper")){
            $('.schoolImg').hide();
        }
        else if(isPartlyScrolledIntoView('.education')){
            $('.schoolImg').show();
        }
        else{
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