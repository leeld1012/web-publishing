const swiper1 = new Swiper(".mainviewSwiper", {
  autoplay: {
    delay: 5000
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

// stop() start()------------------------
// mainview swiper---------------
const pauseBtn1 = $('#mainview .swiper-pause');
const playBtn1 = $('#mainview .swiper-play');

pauseBtn1.on('click', function () {
  $(this).css({'display' : 'none'});
  playBtn1.css({'display' : 'block'});
  swiper1.autoplay.stop();
});
playBtn1.on('click', function () {
  $(this).css({'display' : 'none'});
  pauseBtn1.css({'display' : 'block'});
  swiper1.autoplay.start();
});

// news swiper---------------------
const pauseBtn3 = $('#news .swiper-pause');
const playBtn3 = $('#news .swiper-play');
pauseBtn3.on('click', function () {
  $(this).css({'display' : 'none'});
  playBtn3.css({'display' : 'block'});
  swiper3.autoplay.stop();
});
playBtn3.on('click', function () {
  $(this).css({'display' : 'none'});
  pauseBtn3.css({'display' : 'block'});
  swiper3.autoplay.start();
});
