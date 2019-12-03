
$(function () {
    $(document).scroll(function () {
        var $nav = $(".sticky_nav");
        $nav.toggleClass('sticky_nav_on_scroll', $(this).scrollTop() > 0);
        });
    }
);


$(document).ready(function(){
    $(".nav_link_anchor").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


window.addEventListener('scroll', function(){
    eka_logo = document.getElementById('logo');
    eka_logo.style.opacity = 1 - + window.pageYOffset/550;
    
});


/*
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('#landing').css({
        filter: "blur(" + (scroll/100) + "px)"
    })
})
*/

var countDownDate = new Date("feb 5, 2020 09:00:00").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown_timer").innerHTML = days + " d   " + hours + " h   "
    + minutes + " m   " + seconds + " s   ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown_timer").innerHTML = "";
    }
}, 1000);



$(window).scroll(function() {
    if ($(this).scrollTop() > 807){  
        $('nav').addClass("small_nav");
        
    }
    else{
        $('nav').removeClass("small_nav");
        
    }
});

