// This makes sure that the script runs only after the DOM has loaded, 
document.addEventListener('DOMContentLoaded', () =>{
    "use strict";
     //  Sticky Header on Scroll navbar come with scroll
     const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;
      
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) { // this condition checks whether the difference between the headerOffset (the distance from the top of the header to the top of the document) and the current vertical scroll position (window.scrollY) is less than or equal to 0.
          selectHeader.classList.add('sticked');
          if (nextElement)
           nextElement.classList.add('sticked-header-offset');
        } else {
          selectHeader.classList.remove('sticked');
          if (nextElement) nextElement.classList.remove('sticked-header-offset');
        }
      }
      window.addEventListener('load', headerFixed);
      document.addEventListener('scroll', headerFixed);
    }

    // Navbar links active state on scroll
let navbarlinks = document.querySelectorAll('#navbar a');
function navbarlinksActive() {
  const position = window.scrollY + 200;
 // Iterate over each navigation link
  navbarlinks.forEach(navbarlink => {
    if (navbarlink.hash) {
      let section = document.querySelector(navbarlink.hash);
      if (section && position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    }
  });
}
window.addEventListener('scroll', navbarlinksActive);
window.addEventListener('load', navbarlinksActive);

    // Mobile nav toggle
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });
   
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }
    //  Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
      if (!navbarlink.hash) return;
  
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
  
      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });

    /*
    //   initializes a Swiper slider with the class '.slides-3'& configures its behavior
     */
      new Swiper('.slides-3', {
        speed: 500, 
        loop: true, 
        autoplay: {
          delay:3000,
        },
        slidesPerView: 'auto',
        // way to visually represent
        pagination: '.swiper-pagination', 
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
          }
        }
      });
     /* Animation on scroll function and init*/
     function initializeAOS() {
      AOS.init({
        duration: 1000,         
        easing: 'ease-in-out',   
      });
    }
     window.addEventListener('load', initializeAOS);
    });

  