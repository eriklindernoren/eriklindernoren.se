$(document).ready(function(){screen.height-80;wow=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!0,live:!0}),wow.init(),$(document).on("click",".navbuttons",function(e){e.preventDefault();var i="#"+this.getAttribute("data-target");"#contact"==i?$("html, body").animate({scrollTop:$(document).height()},800,"linear"):$("html, body").animate({scrollTop:$(i).offset().top},800,"linear")}),$("#startImg").backstretch("./images/desk5dyed.jpeg"),$("#schoolImg").backstretch("./images/zurich1.jpeg"),$(".imageDiv").hover(function(){$(this).children(".imgText").delay(150),$(this).children(".imgText").children("p").delay(150),$(this).children(".imgText").animate({height:"20%"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"1"},100,"linear")},function(){$(this).children(".imgText").animate({height:"0"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"0"},100,"linear")});var e=function(e){var i=(1*$(window).height()/2,$(window).height(),$(".projects").offset().top-100);e>i?$("#contact").show():($("#contact").hide(),e>100?$("#schoolImg").show():$("#schoolImg").hide())};$(window).scroll(function(i){var t=$(window).scrollTop();e(t);{var n=$(".education").offset().top-$(window).height();$(".projects").offset().top-200,$(".about").offset().top-$(window).height()}if(t>n){var a=n+700;if(window.innerWidth<=925)var o=-Math.min(0,t-$(".education").offset().top+$(window).height()-900);else if(a>t)var o=Math.min(.002*Math.pow(t-a,2),$(window).height());else o=0;$(".educationContainer > .eduTimeline").css({transform:"translate3d("+o+"px, "+o+"px, 0px)"}),$(".educationContainer > .eduTimeline").css({"-webkit-transform":"translate3d("+o+"px, "+o+"px, 0px)"}),$(".educationContainer > .eduTimeline").css({"-moz-transform":"translate3d("+o+"px, "+o+"px, 0px)"})}if(t>n){var a=n+700;if(window.innerWidth<=925)var r=Math.min(0,t-$(".education").offset().top+$(window).height()-400);else if(a>t)var r=-Math.min(.002*Math.pow(t-a,2),$(window).height());else r=0;var s=-r/3;$(".educationContainer > .eduSummary").css({transform:"translate3d("+r+"px,"+s+"px, 0px)"}),$(".educationContainer > .eduSummary").css({"-webkit-transform":"translate3d("+r+"px, "+s+"px, 0px)"}),$(".educationContainer > .eduSummary").css({"-moz-transform":"translate3d("+r+"px, "+s+"px, 0px)"})}});var i=!0;$(".showNav").click(function(){i?($(".lowerMNavList > a").fadeIn(300),$(".lowerMNavList").slideDown(400,"linear"),i=!1):($(".lowerMNavList").slideUp(400,"linear"),$(".lowerMNavList > a").fadeOut(300),i=!0)});var t,n=!1,a=function(){var e="."+$(this).children(".workButton").children("a").data("target");n&&e!=t?($("#popDownWrapper").slideUp(300,"linear"),$(t).hide(),$("#popDownWrapper").slideDown(300,"linear"),$(e).delay(300).fadeIn(300)):n?($("#popDownWrapper").slideUp(300,"linear"),$(t).fadeOut(300),n=!1):($(e).fadeIn(300),$("#popDownWrapper").slideDown(300,"linear"),n=!0),t=e},o=function(){$(".experience > h1").css({color:"rgb(140,140,140)",transition:"color 150ms linear"})},r=function(){$(".experience > h1").css({color:"rgb(170,170,170)",transition:"color 150ms linear"})};$(".flip3d").click(a),$(".flip3d").hover(o,r);var s=4;$(".slideDir").on("click",function(){var e=$(this).attr("id");$("#div"+s).hide(),"slideRight"==e?(s-=1,0==s&&(s=4)):"slideLeft"==e&&(s+=1,5==s&&(s=1)),$("#div"+s).fadeIn(1e3)});var d,l=function(){window.innerWidth>668?($("#startImg").backstretch("./images/desk5dyed.jpeg"),$("#schoolImg").backstretch("./images/zurich1.jpeg"),668>=d&&$("#contact").css({display:"block",position:"fixed",bottom:"0","z-index":"2"}),$(".projects").css({"margin-bottom":"620px"})):($("#startImg").backstretch("./images/desk1mobile.jpeg"),$(".projects").css({"margin-bottom":"0px"}),$("#contact").css({display:"block","z-index":"3",position:"relative",bottom:"0"})),window.innerWidth<=925&&d>925?($("#navbar").fadeOut(600),$("#mobileNav").fadeIn(600)):window.innerWidth>925&&925>=d&&($("#mobileNav").fadeOut(600),$("#navbar").fadeIn(600)),d=window.innerWidth};l(),$(window).resize(l);var c=function(){$(".lowerMNavList").css({display:"-webkit-box",display:"-ms-flexbox",display:"-webkit-flex",display:"flex"}),$(".lowerMNavList").hide()};c();var p=$(window).scrollTop,h="down";$(document).scroll(function(){var e=$("body").scrollTop(),i=p-e,t=$("#navbar").is(":hover");window.innerWidth>925&&("down"==h&&0>i&&e>200&&!t?($("#navbar").css({transform:"translateY(-75px)"}),h="up"):"up"==h&&(i>20||200>e)&&($("#navbar").css({transform:"translateY(0px)"}),h="down")),$(".scrollToTop").css(e>200&&window.innerWidth>668?{transform:"translateY(-100px)"}:{transform:"translateY(100px)"}),p=e})});