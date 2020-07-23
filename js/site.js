/* ------------- rellax ------------ */

const rellax = new Rellax(".rellax");

/* -------- scrolling arrow -------- */

if ($(".o-meni").height() > $(window).height()) {
  var scrollOffset = $(window).height();
} else {
  var scrollOffset = $(".o-meni").offset().top + ($(".o-meni").height() - $(window).height()) / 2;
}

$(".arrow").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: scrollOffset }, 1500);

  setTimeout(function () {
    $(".arrow").css("display", "none");
  }, 1000);
});

$(window).scroll(function () {
  $(".arrow").css("opacity", "0");

  setTimeout(function () {
    $(".arrow").css("display", "none");
  }, 1000);
});
