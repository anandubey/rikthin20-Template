
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
    if ($(this).scrollTop() > 719){  
        $('nav').addClass("small_nav");
        
    }
    else{
        $('nav').removeClass("small_nav");
        
    }
});


// Events Section Modal

var modal = document.getElementById('modal');
var cultural_img = document.getElementById('culturalImg');
var technical_img = document.getElementById('technicalImg');
var gaming_img = document.getElementById('gamingImg');
var sports_img = document.getElementById('sportsImg');
var closeBtn = document.getElementById('closeBtn');

cultural_img.addEventListener("click", function(){
    
    modal.style.display = 'flex';
});
technical_img.addEventListener("click", function(){
    
    modal.style.display = 'flex';
});
gaming_img.addEventListener("click", function(){
    
    modal.style.display = 'flex';
});
sports_img.addEventListener("click", function(){
    
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}

//Listens to outside clilck
window.addEventListener('click', outsideClick);
document.addEventListener ('keydown', outsideClick);

function outsideClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
    if(e.key === "Escape"){
        modal.style.display = 'none';
    }
}
document.addEventListener ('keydown', outsideClick);

// Gallery carousel

// Contacts
var myID = document.getElementById("developers");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 2200) {
    myID.style.zIndex= 1;
  } else {
    myID.style.zIndex = 0;
  }
};

window.addEventListener("scroll", myScrollFunc);