$(document).ready(function(){screen.height-80;(new WOW).init(),$(document).on("click",".navbuttons",function(t){t.preventDefault();var e="#"+this.getAttribute("data-target");"#contact"==e?$("html, body").animate({scrollTop:$(document).height()},800,"easeOutSine"):$("html, body").animate({scrollTop:$(e).offset().top},800,"easeOutSine")}),$("#startImg").backstretch("./images/desk1.jpeg"),$("#schoolImg").backstretch("./images/liu.jpeg");var t=function(t){{var e=$(".education").offset().top-$(window).height(),o=$(".projects").offset().top-200;$("#contact").offset().top-$(window).height()}window.innerWidth>568?e>t?($("#startImg").show(),$("#schoolImg").hide(),$("#contact").hide()):t>e&&o>t?($("#startImg").hide(),$("#schoolImg").show(),$("#contact").hide()):($("#schoolImg").hide(),$("#startImg").hide(),$("#contact").show()):($("#schoolImg").hide(),$("#startimg").hide())};$(window).scroll(function(){var e=$(window).scrollTop();if(t(e),window.innerWidth>568){var o=$(".education").offset().top-$(window).height(),i=($(".projects").offset().top-200,$(".about").offset().top-$(window).height());if(e>o){var n=-Math.min(0,e-$(".education").offset().top+$(window).height()-700);$(".educationContainer > .eduTimeline").css({transform:"translate3d("+n+"px, "+n+"px, 0px)"}),$(".educationContainer > .eduTimeline").css({"-webkit-transform":"translate3d("+n+"px, "+n+"px, 0px)"}),$(".educationContainer > .eduTimeline").css({"-moz-transform":"translate3d("+n+"px, "+n+"px, 0px)"})}if(e>o){var a=Math.min(0,e-$(".education").offset().top+$(window).height()-700),s=-a/3;$(".educationContainer > .eduSummary").css({transform:"translate3d("+a+"px,0px, 0px)"}),$(".educationContainer > .eduSummary").css({"-webkit-transform":"translate3d("+a+"px, "+s+"px, 0px)"}),$(".educationContainer > .eduSummary").css({"-moz-transform":"translate3d("+a+"px, "+s+"px, 0px)"})}else if(e>i){var r=Math.min(0,e-$(".about").offset().top+$(window).height()-700);$("#hello").css({transform:"translate3d("+r+"px, 0px, 0px)"}),$("#hello").css({"-webkit-transform":"translate3d("+r+"px, 0px, 0px)"}),$("#hello").css({"-moz-transform":"translate3d("+r+"px, 0px, 0px)"})}}});var e=!0;$(".showNav").click(function(){e?($(".lowerMNavList").css({display:"-webkit-box",display:"-ms-flexbox",display:"-webkit-flex",display:"flex"}),$(".lowerMNavList").hide(),$(".lowerMNavList").slideDown(400),e=!1):($(".lowerMNavList").slideUp(400),e=!0)});var o,i=!1,n=function(){var t="."+$(this).data("target");i&&t!=o?($("#popDownWrapper").slideUp(400,"easeInSine"),$(o).hide(),$("#popDownWrapper").slideDown(400,"easeOutSine"),$(t).delay(300).fadeIn(400)):i?($("#popDownWrapper").slideUp(400,"easeInSine"),$(o).fadeOut(400),i=!1):($(t).fadeIn(400),$("#popDownWrapper").slideDown(400,"easeOutSine"),i=!0),o=t},a=function(){$(".experience > h1").css({color:"rgb(140,140,140)",transition:"color 150ms linear"})},s=function(){$(".experience > h1").css({color:"rgb(170,170,170)",transition:"color 150ms linear"})};$(".workButton").click(n),$(".workButton").hover(a,s);var r=4;$(".slideDir").on("click",function(){var t=$(this).attr("id");$("#div"+r).hide(),"slideRight"==t?(r-=1,0==r&&(r=4)):"slideLeft"==t&&(r+=1,5==r&&(r=1)),$("#div"+r).fadeIn(1e3)}),$(".about").ready(function(){});var d,c=function(){window.innerWidth>568?(568>=d&&$("#contact").css({display:"block","z-index":"0",position:"fixed"}),$(".projects").css({"margin-bottom":$("#contact").height()-20+"px"})):($(".projects").css({"margin-bottom":"0px"}),$("#contact").css({display:"block","z-index":"2",position:"relative"})),t($(window).scrollTop()),window.innerWidth<=925&&d>925?($("#navbar").fadeOut(600),$("#mobileNav").fadeIn(600)):window.innerWidth>925&&925>=d&&($("#mobileNav").fadeOut(600),$("#navbar").fadeIn(600)),d=window.innerWidth};c(),$(window).resize(c);var l=0;$(document).scroll(function(){var t=$("body").scrollTop(),e=l-t,o=$("#navbar").is(":hover");t>l&&t>400&&!o?$("#navbar").fadeOut(800):e>20&&window.innerWidth>925&&$("#navbar").fadeIn(800),t>300&&window.innerWidth>568?$(".scrollToTop").fadeIn(400):$(".scrollToTop").fadeOut(400),l=t})});