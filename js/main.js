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

// function myFunction() {
//   var x = document.getElementById("aboutMe");
//   if (x.style.display === "none"){
//     x.style.display = "inline-block";
//   } else {
//     x.style.display = "none";
//   }
//   }





// var i = 0;
// var images = [];
// var time = 4000;

// images[0] = 'images/background-placeholder.jpg';
// images[1] = 'images/trees.jpg';
// images[2] = 'images/tower.jpg';

// function changeImg(){
//   document.heromainslider.src = images[i];

//   if(i < images.length - 1){
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImg()", time);
// }
// window.onload = changeImg;




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






 