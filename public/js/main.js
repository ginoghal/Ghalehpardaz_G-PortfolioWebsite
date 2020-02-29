(() => {
   
  console.log("fired");

  var menu = document.getElementById('menu');
    var closeIcon = document.getElementById("closeIcon");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }



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


var play = document.querySelector('#play'),
    pause = document.querySelector('#pause'),
    progress = document.querySelector('#progress'),
    volume = document.querySelector('#volume'),
    video = document.querySelector('compilation');
    

play.addEventListener('click', function(){
  compilation.play();
  
});

pause.addEventListener('click', function(){
  compilation.pause();

});

compilation.addEventListener('timeupdate', function(){
  progress.value = compilation.currentTime / compilation.duration;

});

volume.addEventListener('change', function(e){
  compilation.volume = e.currentTarget.value / 100;

});


{
  var play = document.querySelector('#play1'),
    pause = document.querySelector('#pause1'),
    progress = document.querySelector('#progress1'),
    volume = document.querySelector('#volume1'),
    video = document.querySelector('cityscape');

    play.addEventListener('click', function(){
      cityscape.play();
      
    });
    
    pause.addEventListener('click', function(){
      cityscape.pause();
    
    }); 
    
    cityscape.addEventListener('timeupdate', function(){
      progress.value = cityscape.currentTime / cityscape.duration;
    
    });
    
    volume.addEventListener('change', function(e){
      cityscape.volume = e.currentTarget.value / 100;
    
    });
}

const seeMoreButtons = document.querySelectorAll('.see-more'),
popOver = document.querySelector(".popover"); 

function fetchData() {
  let targetElement = this,
      url = `./includes/connect.php?id=${this.dataset.target}`;

  fetch(url)
  .then(res => res.json())
  .then(data => {
      console.log(data);
      buildPopover(data, targetElement);
  })
  .catch((err) => console.log(err));
}

function buildPopover(portfolio, el) {
  popOver.querySelector(".name").textContent = `Name: ${portfolio.name}`;
  popOver.querySelector(".type").textContent = `Type: ${portfolio.type}`;
  popOver.querySelector(".dev_notes").textContent = `Dev Notes: ${portfolio.dev_notes}`;


 popOver.classList.add('show-popover');

 el.appendChild(popOver);
}

seeMoreButtons.forEach(el => el.addEventListener("click", fetchData))

// {
//   var play = document.querySelector('#play2'),
//   pause = document.querySelector('#pause2'),
//   video = document.querySelector('switch');

//   play.addEventListener('click', function(){
//     switch.play();
    
//   });
  
//   pause.addEventListener('click', function(){
//     switch.pause();
  
//   });  

// }




})();

// var current = 0,
//     slides = document.getElementsByTagName("h5");

// setInterval(function() {
//   for (var i = 0; i < slides.length; i++){
//     slides[i].style.opacity = 0;
//   }
//   current = (current != slides.length - 1) ? current + 1 : 0;
//   slides[current].style.opacity = 1;
// }, 3000);


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
// var time = 3000;

// images[0] = 'images/ginoprofile.jpg';
// images[1] = 'images/aboutgino.jpg';

// function changeImg(){
//   document.slide.src = images[i];

//   if(i < images.length - 1){
//     i++;
//   } else {
//     i = 0;
// }

// setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

// var slider_content = document.getElementById('heroImage');

// var image = ['hero_image', 'nature_painting1.jpg', 'still_life2'];




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

// var TxtType = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 6000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//   this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//   this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 150 - Math.random() * 100;



//   setTimeout(function() {
//   that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('typewrite');
//   for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-type');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtType(elements[i], JSON.parse(toRotate), period);
//       }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//   document.body.appendChild(css);





 