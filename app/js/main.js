
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


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}