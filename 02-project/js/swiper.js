const swiper1 = new Swiper(".mainviewSwiper", {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiper2 = new Swiper(".videoSwiper", {
  direction: "horizontal",
  slidesPerView: 2.6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 300
  },
});


const swiper3 = new Swiper(".newsSwiper", {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});