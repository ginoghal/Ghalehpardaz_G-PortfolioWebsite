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
