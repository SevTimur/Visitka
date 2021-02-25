// Плавная прокрутка
function jackor() {
  $(document).ready(function(){
    $(".header__nav .header__item").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
    });
    $(".button-1").on("click",$(this), function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
    });
  });
}

// Слайдер на главной
function slider() {
  $('.main-page__desc-img').slick({
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
};

// Добавление классов для Бургера
function activenav() {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__nav').toggleClass('active');
  });
}

// Скролл наверх
function scrollToTop() {
  if ($("#back-to-top").length) {
    var scrollTrigger = 100,
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate (
        {
          scrollTop: 0,
        },
        400
      );
    });
  }
}

$(document).ready(function() {
  jackor();
  slider();
  activenav();
  scrollToTop();
});
