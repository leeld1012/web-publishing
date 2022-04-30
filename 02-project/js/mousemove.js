$(document).mousemove(function (e) {
  var mouseX = (e.pageX * 1/100);
  var mouseY = (e.pageY * 1/100);


  $('.circle').css({
    'left': mouseX,
    'top': mouseY
  })
});