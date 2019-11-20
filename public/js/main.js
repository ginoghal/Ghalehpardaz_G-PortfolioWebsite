const mainNavSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.mainNav');
  const mainNavLink = document.querySelectorAll('.mainNav li');
  //nav

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('mainNav-active');


      mainNavLink.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        } else {
              link.style.animation = `mainNavFade 0.5s ease forwards ${index / 4 + 0.3}s`;
        }
      });
  });

}

mainNavSlide();

var current = 0,
    slides = document.getElementsByTagName("h5");

setInterval(function() {
  for (var i = 0; i < slides.length; i++){
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);


// function myFunction() {
//   var x = document.getElementById("aboutMe");
//   if (x.style.display === "none"){
//     x.style.display = "inline-block";
//   } else {
//     x.style.display = "none";
//   }
//   }



var i = 0;
var images = [];
var time = 4000;

images[0] = 'public/images/background-placeholder.jpg';
images[1] = 'public/images/ginoprofilepicture.svg';

function changeImg(){
  document.heromainslider.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}
window.onload = changeImg;




// var i1 = 3;
// var images1 = [];
// var time1 = 3000;

// images1[3] = 'images/web.svg';
// images1[4] = 'images/marketing.svg';
// images1[5] = 'images/camera.svg';
// images1[6] = 'images/video.svg';
// images1[7] = 'images/music.svg';

// function changeImage1(){
//   document.heroslider.src = images1[i1];

//   if(i1 < images1.length - 1){
//     i1++;
//   } else {
//       i1 = 3;
//     }

//     setTimeout("changeImage1()", time1);
//   }
//     window.onload = changeImage1;
  


// var current = 0,
//     slides = document.getElementsByTagName("h3");

// setInterval(function() {
//   for (var i = 0; i < slides.length; i++){
//     slides[i].style.opacity = 0;
//   }
//   current = (current != slides.length - 1) ? current + 1 : 0;
//   slides[current].style.opacity = 1;
// }, 3000);

function webClick(){
  document.getElementByTagName("h4").innerHTML ="I am a Web Developper";
  
}

// function webClick1(){
//   document.getElementById("click2").innerHTML ="I am a Marketer";
  
// }

// function webClick() {
//   var element = document.getElementById("click1");

//   if (element.classList) { 
//     element.classList.toggle("click1");
//   } else {
//     var classes = element.className.split(" ");
//     var i = classes.indexOf("click1");

//     if (i >= 0) 
//       classes.splice(i, 1);
//     else 
//       classes.push("click1");
//       element.className = classes.join(" "); 
//   }
// }

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 6000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;



  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};




 