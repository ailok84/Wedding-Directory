
document.querySelector("#openMenu").addEventListener("click",function(){


    // hide the opening butto
    //show the x button\
    //show the content

    console.log("i am here");
    document.querySelector("#openMenu").style.display="none";
    document.querySelector("#mySidenav .closebtn").style.display="block";
    document.querySelector("#mySidenav .content_sidenav").style.display="flex";
})

function closeNav() {
    console.log("i am here");
    document.querySelector("#openMenu").style.display="block";
    document.querySelector("#mySidenav .closebtn").style.display="none";
    document.querySelector("#mySidenav .content_sidenav").style.display="none";
}

$(".content_sidenav a").on("click", closeNav);

let ring = document.querySelector(".ring");
let champagne = document.querySelector(".champagne");
let champagneBottle =document.querySelector(".champagneBottle");
let flowers = document.querySelector(".flowers");
let cake = document.querySelector(".cake");
let gift = document.querySelector(".gift");
let photo = document.querySelector(".photo");
let heart = document.querySelector(".heart");


window.onload = floatRing();


function floatRing() {

    ring.classList.add("moveRing");
    flowers.classList.add("moveFlowers");
    cake.classList.add("moveCake");
    gift.classList.add("moveGift");
    photo.classList.add("movePhoto");
    champagne.classList.add("moveChampagne");
    champagneBottle.classList.add("moveChampagneBottle");
    heart.classList.add("moveHeart");
    console.log('visible');
}






jQuery(document).ready(function($) {
		if (  $('.quote-loop').length ){
		(function loop() {
			$('.quote-loop').each(function() {
				var $self = $(this);
				$self.parent().queue(function (n) {
					$self.fadeIn(1000).delay(5000).fadeOut(1000, n);
				});
			}).parent().promise().done(loop);
		}());
	}
});

js: $( document ).ready(function() {
    console.log( "ready!" );

    $( ".wrapper-letters" ).hover(function() {
        setTimeout(function(){
            $( "#m" ).addClass( "animate-letter" );
        }, 100);
        setTimeout(function(){
            $( "#e" ).addClass( "animate-letter" );
        }, 300);
        setTimeout(function(){
            $( "#n" ).addClass( "animate-letter" );
        }, 500);
        setTimeout(function(){
            $( "#u" ).addClass( "animate-letter" );
        }, 700);

        setTimeout(function(){
            setTimeout(function(){
                $( "#m" ).removeClass( "animate-letter" );
            }, 0);
            setTimeout(function(){
                $( "#e" ).removeClass( "animate-letter" );
            }, 200);
            setTimeout(function(){
                $( "#n" ).removeClass( "animate-letter" );
            }, 400);
            setTimeout(function(){
                $( "#u" ).removeClass( "animate-letter" );
            }, 600);
        }, 900);
    });

});
/////




$(function() {
    var logo = $("svg");
    let layerlogo1 = document.querySelector("#Layer_1");
    let smlLogo = "";
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 500) {

          if(!$(".logo").hasClass("sml-logo")) {
            layerlogo1.classList.add("hide");
            //logo.removeClass("logo").addClass("sml-logo").fadeIn( "slow");
            $(".logo").removeClass("logo").addClass("sml-logo").fadeIn( "slow");
            smlLogo = document.querySelector(".sml-logo");

          }
        }
        else {
          if(!$(".sml-logo").hasClass("logo")) {
              smlLogo = document.querySelector(".sml-logo");
             smlLogo.classList.add("hide");
              layerlogo1.classList.remove("hide");
            $(".sml-logo").removeClass("sml-logo").addClass('logo').fadeIn( "slow");
          }
        }

    });
})



document.querySelector(".logo").addEventListener("click",function(){


    // hide the opening butto
    //show the x button\
    //show the content

    console.log("i am  hi hi here");
    document.querySelector("#openMenu").style.display="none";
    document.querySelector("#mySidenav .closebtn").style.display="block";
    document.querySelector("#mySidenav .content_sidenav").style.display="flex";


$("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
})
