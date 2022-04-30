// reservation-box ------------
var tlReservationBox = gsap.timeline();
tlReservationBox.delay(1).from(".left-box", {
    duration: 0.6,
    opacity: 0,
    y: 100
  })
  .from(".right-box", {
    duration: 1,
    opacity: 0,
    y: 100
  })

// mainview swiper title --------------
var tlMainview = gsap.timeline();
tlMainview.fromTo(".tt",{
  opacity: 0,
  y: 40,
}, {
  stagger: 0.2,
  opacity: 1,
  y: 0,
})