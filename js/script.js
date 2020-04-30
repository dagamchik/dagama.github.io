var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*TELEPHONE SECOND PAGE*/

function FuncImages() {
  document.getElementById("settings").style.display = "block";
  document.getElementById("phone").style.display = "none";
  document.getElementById("timers").style.display = "none";
  document.getElementById("musics").style.display = "none";
  document.getElementById("supports").style.display = "none";
  document.getElementById("msgs").style.display = "none";
  document.getElementById("cameras").style.display = "none";
}

function FuncImages1() {
  document.getElementById("timers").style.display = "block";
  document.getElementById("phone").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("musics").style.display = "none";
  document.getElementById("supports").style.display = "none";
  document.getElementById("msgs").style.display = "none";
  document.getElementById("cameras").style.display = "none";
}

function FuncImages2() {
  document.getElementById("musics").style.display = "block";
  document.getElementById("timers").style.display = "none";
  document.getElementById("phone").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("supports").style.display = "none";
  document.getElementById("msgs").style.display = "none";
  document.getElementById("cameras").style.display = "none";
}

function FuncImages3() {
  document.getElementById("supports").style.display = "block";
  document.getElementById("timers").style.display = "none";
  document.getElementById("phone").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("musics").style.display = "none";
  document.getElementById("msgs").style.display = "none";
  document.getElementById("cameras").style.display = "none";
}

function FuncImages4() {
  document.getElementById("msgs").style.display = "block";
  document.getElementById("supports").style.display = "none";
  document.getElementById("timers").style.display = "none";
  document.getElementById("phone").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("musics").style.display = "none";
  document.getElementById("cameras").style.display = "none";
}

function FuncImages5() {
  document.getElementById("cameras").style.display = "block";
  document.getElementById("msgs").style.display = "none";
  document.getElementById("supports").style.display = "none";
  document.getElementById("timers").style.display = "none";
  document.getElementById("phone").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("musics").style.display = "none";
}


$(document).ready(function() {
    $('.screens').slick({
      arrows:false,
      dots:true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 1000,
      infinite: false,
    });
})

$(document).ready(function() {
    $('.slider1').slick({
      arrows:false,
      dots:true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      infinite: false,
    });
})


function FuncImages6() {
  document.getElementById("video").style.display = "block";
  document.getElementById("triangle").style.display = "none";
  document.getElementById("logo2").style.display = "none";
}