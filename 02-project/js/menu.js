$(function () {

  // header gnb hover --------------------
  const gnbBtn = $('.gnb-list');
  const header = $('header');

  gnbBtn.eq(0).hover(function(){
    $(this).find('.lnb').stop().fadeIn(200)
    header.css({'z-index': 300}).addClass('bg-black')
  },function(){
    $(this).find('.lnb').stop().fadeOut(200)
    header.removeClass('bg-black').css({'z-index': 100})
  });

  gnbBtn.eq(1).hover(function(){
    $(this).find('.lnb').stop().fadeIn(200)
    header.css({'z-index': 300}).addClass('bg-black')
  },function(){
    $(this).find('.lnb').stop().fadeOut(200)
    header.removeClass('bg-black').css({'z-index': 100})
  });

  // lnb 3, 4 작업시
  // gnbBtn.eq(2).hover(function(){
  //   $(this).find('.lnb').stop().fadeIn(200)
  //   header.css({'z-index': 300}).addClass('bg-black')
  // },function(){
  //   $(this).find('.lnb').stop().fadeOut(200)
  //   header.removeClass('bg-black').css({'z-index': 100})
  // });

  // gnbBtn.eq(3).hover(function(){
  //   $(this).find('.lnb').stop().fadeIn(200)
  //   header.css({'z-index': 300}).addClass('bg-black')
  // },function(){
  //   $(this).find('.lnb').stop().fadeOut(200)
  //   header.removeClass('bg-black').css({'z-index': 100})
  // });


  // header lang click ---------------
  const langBtn = $('.lang');

  langBtn.click(function (e) { 
    e.preventDefault();
    $('.drop').toggleClass('active')
    $(this).find('i').toggleClass('reversed')
  });

  // side-quickmenu click ------------
const qmBtn = $('.qm-up');
const qmInner = $('.qm-inner');
const closeBtn = $('.close')

  qmBtn.eq(2).click(function (e) { 
    e.preventDefault();
    qmInner.siblings().removeClass('active')
    $('.qm2-inner').toggleClass('active')
  });

  qmBtn.eq(3).click(function (e) { 
    e.preventDefault();
    qmInner.siblings().removeClass('active')
    $('.qm3-inner').toggleClass('active')
  });

  closeBtn.click(function(e){
    e.preventDefault();
    qmInner.removeClass('active');
  });


  // news menu click -----------------
  const newsMenuBtn = $('#news .menu li a');
  const newsList = $('.news-list');

  newsList.eq(0).addClass('active');

  newsMenuBtn.eq(0).click(function (e) { 
    e.preventDefault();
    newsList.removeClass('active')
    newsList.eq(0).addClass('active')
  });

  newsMenuBtn.eq(1).click(function (e) { 
    e.preventDefault();
    newsList.removeClass('active')
    newsList.eq(1).addClass('active')
  });

  newsMenuBtn.eq(2).click(function (e) { 
    e.preventDefault();
    newsList.removeClass('active')
    newsList.eq(2).addClass('active')
  });


  // footer site dropdown
  const siteBtn = $('.site-dropbtn');

  siteBtn.click(function (e) { 
    e.preventDefault();
    $('.dropdown-content').toggleClass('active')
    $(this).find('i').toggleClass('reversed')
  });

  
});