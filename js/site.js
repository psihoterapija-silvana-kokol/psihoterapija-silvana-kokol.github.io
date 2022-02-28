const Main = (function () {
  /* --- rellax --- */

  new Rellax('.rellax', { center: true });

  $('#year').text(new Date().getFullYear());

  /* --- scrolling arrow --- */

  $('.arrow-down').click(function () {
    let scrollOffset;

    if ($('.o-meni').height() < $(window).height()) {
      // scroll to middle
      scrollOffset = $('.o-meni').offset().top - ($(window).height() - $('.o-meni').height()) / 2;
    } else {
      scrollOffset = $('.o-meni').offset().top;
    }

    $('html, body').animate({ scrollTop: scrollOffset }, 1000);

    $('.arrow-down').fadeOut();
  });

  $(window).scroll(function () {
    if (window.scrollY === 0) {
      $('.arrow-down').fadeIn();
    } else {
      $('.arrow-down').fadeOut();
    }
  });
})();

// TODO: fonti so lahko skriti, ko se nalozijo, se pocasi pojavijo (animacija)
// ali: preload fonts

console.log('this is a commit test'); // TODO: delete
