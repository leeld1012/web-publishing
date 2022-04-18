// header mobile button
const toggleBtn = document.querySelector('.mobile-btn');
const menu = document.querySelector('.menu');
const btnGroup = document.querySelector('.btn-group');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnGroup.classList.toggle('active');
  toggleBtn.classList.toggle('active');
});


// Type it 
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#element", {
    cursor: false,
    loop:true,
  }).pause(2000).go();
});

// home cover-slider
var swiper = new Swiper(".cover-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// testimonials cover-slider
var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// WOW 
new WOW({
  offset: 200,
}).init();