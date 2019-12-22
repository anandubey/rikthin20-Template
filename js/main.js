var navBar = document.getElementById('navbar');
eka_logo = document.getElementById('logo');
var landing = document.getElementById('landing');

window.onscroll = function changeClass(){
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    
    if(scrollPosY > 0) {
        navBar.classList.add("sticky_nav_on_scroll");
    } 
    else{
       navBar.classList.remove("sticky_nav_on_scroll");
    }

    if (scrollPosY > 719){  
        navBar.classList.add("small_nav");
        
    }
    else{
        navBar.classList.remove("small_nav");
        
    }

    landing.style.filter = "blur(" + (scrollPosY/100) + "px)";

    
    eka_logo.style.opacity = 1 - + window.pageYOffset/550;
}



function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}


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


// Developers
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


