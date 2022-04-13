
// home cover-slider
var swiper = new Swiper(".cover-slider", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,

    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // },
});


// testimonials cover-slider
var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});