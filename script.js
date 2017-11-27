
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
