// Functions 

$(document).ready(function(){

    $(window).bind('scroll',function(e){
        parallaxScroll();
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

    $('#hamburger').hover(function(){
        if(!menuVisible){
            $('#menuLine1').css({
                    'width': '16px', 
                    'height': '16px', 
                    'border-radius': '50%', 
                    'border': '2px solid rgb(250,250,250)',
                    'top': '30%', 
                    'left': '0',
                    'right': 'auto',
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
    }, function(){
        if(!menuVisible){
            $('#menuLine1').css({
                'width': '100%', 
                'height': 'auto', 
                'border-radius': '0', 
                'border': 'none',
                'border-bottom': '2px solid rgb(250,250,250)',
                'top': '0', 
                'left': 'auto',
                'right': '0',
                'transform' : 'translateY(-50%)'
            });
            $('#menuLine2').show();
            $('#menuLine3').show();
            $('#menuLine4').css({
                'width': '100%',
                'bottom': 'auto',
                'top': '100%', 
                'right': '0',
                'transform' : 'translateY(-50%) rotateZ(0)'
            });
        }
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#mountainHolder2').css('transform','translateY('+Math.round(((scrolled*.25)))+'px)');
        $('#mountainHolder').css('transform','translateY('+Math.round(((scrolled*.5)))+'px)');
    }
    
    var mailHover = function(){
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
            $('#b9').css({'transform': 'translateX(-50%) rotateZ(10deg) translateY(-2px)', 'right': '56px', 'bottom': '40%'});
        },400);

        
        

        
        
        
    }
    var mailNotHover = function(){
        $('#overResume .bulb').css({'border-color': '#2C3E50', 'background-color': 'rgb(250,250,250)', 'box-shadow': 'none'});
        $('#overResume .bulbShine').css({'border-color': 'transparent'});
        $('#screen').css({'background-color': 'rgb(200,200,200)'});
        $('.computerLine').css({'border-color': 'white'});
        $('.hiddenCompLine').css({'visibility': 'hidden'});
        $('#underResume .bulb').css({'border-color': '#2C3E50', 'background-color': 'rgb(250,250,250)', 'box-shadow': 'none'});
        $('#underResume .bulbShine').css({'border-color': 'transparent'});
        $('#selfPortrait div').css({'border-color': '#2C3E50', 'background-color': 'transparent'});
        $('.coffeeSteam').css({'transform': 'translateY(23px) translateX(-50%)', 'opacity': '0'});

        $('#b9').css({'transform': 'translateX(-50%) rotateZ(-90deg)', 'right': '76px', 'bottom': '15px'});

        // for(var i = 1; i <= 9; i++){
        //     $('#b' + i).css({'background-color':'rgb(240,240,240)'});
        // }
    }

    $('#resume').hover(mailHover, mailNotHover);

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
            var star = $('.s' + (i+1));
            var top = placing[i][0];
            var left = placing[i][1];
            $(star).css({'top': top + '%', 'left': left + '%'});
        }
        beenSetUp = true;
    }

    function getNavButtonColor(dist){
        var topOfWindow = $(window).scrollTop();
        var elementDist = dist;

        var about = $('.about').offset().top;
        var eduSummary = $('.education').offset().top;
        var eduTimeline = $('#eduTimelineWrapper').offset().top - 350;
        var experience = $('.experience').offset().top;
        var projects = $('.projects').offset().top;

        if(elementDist < eduSummary){
            return "rgb(200,200,200)";
        }else if(elementDist < eduTimeline){
            return "#E4F1FE";
        }else if(elementDist < projects){
            return "rgb(200,200,200)";
        }else{
            return "rgb(250,250,250)";
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

        for(var i = 1; i < 6; i++){
            if(jump != i)
                $('#span' + i).css({"color": "transparent"});
        }
    }, function(){
        $('#message p span').css({"color": "white"});
    });

    $('#scrollNavigationButtonWrapper .navbuttons').hover(function(){
        var distTop = $(window).scrollTop();
        if(distTop > 550 && window.innerWidth > 1300){
            $(this).find('p').css({'color': '#F64747'});
        }
    }, function(){
        var dist = $(this).offset().top;
        var color = getNavButtonColor(dist);
        $(this).find('p').css({'color': color});
        
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

    $(document).scroll(navAndScrollButtonsOnScroll);
        // Show navigation background, "scroll to top"-button
        var navPos = "down";
        function navAndScrollButtonsOnScroll(){

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
            for(var i = 0; i < $(".scrollNavHeader").length; i++){
                var elem = $(".scrollNavHeader")[i];
                var elemDist = $(elem).offset().top;
                var color = getNavButtonColor(elemDist);
                $(elem).css({'color': color});
            }
            var scrollDist = $(".scrollToTop").offset().top;
            var color = getNavButtonColor(scrollDist);
            $('.scrollToTop').css({'border-color': color});
            $('.scrollToTop .scrollIcon i').css({'color': color});
            $('.scrollToTop .scrollText h1').css({'color': color});


            // Moves the navbar down to the footer when it is reached
            
            // if(distTop > ($(document).height() - 1000)){
            //     $("#scrollNavigationBar").css({'top': 'auto', 'bottom': '120px', 'height': '230px', 'transform': 'translateY(0)'});
            //     $("#scrollNavigationButtonWrapper a").css({'height': '20px', 'padding-right': '20px'});
                
            // }else{
            //     $("#scrollNavigationBar").css({'top': '47%', 'bottom': 'auto', 'height': '400px', 'transform': 'translateY(-50%)'});
            //     $("#scrollNavigationButtonWrapper a").css({'height': '40px', 'padding-right': '25px'});

            // }
            

            

            if(distTop > 300 && window.innerWidth > 668){
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
        $('.experience').css({'box-shadow': '0px 6px 10px -2px rgba(0,0,0,0.4)'});
        $('.bigButton > div').css({'box-shadow': '0px 6px 10px -2px rgba(0,0,0,0.4)'});
    }
    lastUsed = _this;
}



var projImagesLoaded = false;
var penAnimationDone = false;
function scrollAnimations(){
    var scrolledY = $(window).scrollTop();
    whatBackground(scrolledY);

    var triggerContactAnimations = $('.projects').offset().top + $(window).height();

    // var dots = $('.timelineDot');
    // for(var i = 0; i < dots.length; i++){
    //     var elem = dots[i];
    //     if(isPartlyScrolledIntoView(elem)){
    //         $(elem).addClass('growAndShrink');
    //     }
    // }

    if(!penAnimationDone && isFullyScrolledIntoView($('.timelineDot')[3])){
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
        penAnimationDone = true;
    }


    if(isFullyScrolledIntoView($('.timelineDotUpper')[3])){
        for(var i = 0; i < 6; i++){
            $($('.timelineDotUpper')[i]).addClass('growAndShrink' + (i+1));
        }
    }

    if(isPartlyScrolledIntoView('#timelineDotHeader')){
        $('#timelineDotHeader').addClass('rotate360').addClass('appearFromTopCentered');
    }

    if(isFullyScrolledIntoView('.slideDir')){
        $('#projImages').addClass('appearFromBottom');
    }

    // var timelineDots = $('.timelineDot');
    // for(var i = 0; i < timelineDots.length; i++){
    //     var elem = timelineDots[i];
    //     if(isFullyScrolledIntoView($('.edu')[i])){
    //         transformTimelineDots(elem);
    //     }
    // }

    var bigButtons = $('.bigButton');
    for(var i = 0; i < bigButtons.length; i++){
        var elem = bigButtons[i];
        if(isFullyScrolledIntoView(elem)){
            $(elem).addClass("slideDownBig" + i);
        }
    }
}

function transformTimelineDots(elem){
    setTimeout(function(){
        $(elem).css({'border-radius': '50%'});
    },400);
    $(elem).css({'transform': 'translateX(-50%) translateY(-50%) rotateZ(0deg)', 'width': '13px','height': '13px'});
}

function whatBackground(scrolledY){

    var docViewBottom = $(window).scrollTop() + $(window).height();
    var slidesInProject =  $('.projects').offset().top + $('.projects').height() - 100;

    if(docViewBottom > slidesInProject){
        $('#contact').show();
        $('.schoolImg').hide();
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