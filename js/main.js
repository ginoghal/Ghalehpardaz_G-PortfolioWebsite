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

var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/web.svg';
images[1] = 'images/marketing.svg';
images[2] = 'images/camera.svg';
images[3] = 'images/video.svg';
images[4] = 'images/music.svg';

function changeImg(){
  document.heroslider.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
      i = 0;
    }

    setTimeout("changeImg()", time);
  }
    window.onload = changeImg;



var current = 0,
    slides = document.getElementsByTagName("h3");

setInterval(function() {
  for (var i = 0; i < slides.length; i++){
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);








 