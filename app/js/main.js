// $(function scrollTo(element){
//   window.scroll({
//     left: 0,
//     top: element.offsetTop,
//     behavior: 'smooth'
//   })
// });

// var btn__scroll = document.querySelector('.btn-scroll');

// btn__scroll.addEventListener('click', () => {
//   console.log('privet')
//   //scrollTo(footer);
// });


$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });
    
    $(".product-slider__inner").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows:false
    });

    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
  });

  $(".icon-th-list").on('click',function(){
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon--th-large').removeClass('active');
  });

  $(".icon--th-large").on('click',function(){
    $('.product__item').removeClass('list');
    $('.icon-th-list').removeClass('active');
    $('.icon--th-large').addClass('active');
  });


  $('.header__btn-menu').on('click',function(){
    $('.header__box').toggleClass('active');
  });

  $('.menu__btn').on('click',function(){
    $('.menu__list').slideToggle();
  });

  


  var mixer = mixitup('.products__inner-box');

});