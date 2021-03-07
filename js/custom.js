$(document).ready(function () {
  $(".mobile-filter-container .mobile-filter").click(function () {
    $(".filter-overlay").toggle(1000);
  });
  $(".cart-mobile").click(function () {
    $(".cart-overlay").toggle(1000);
  });
});

$(".slick-carousel").slick({
  infinite: true,
  slidesToShow: 5, // Shows a three slides at a time
  slidesToScroll: 2, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow:
    "<img class='a-left control-c prev slick-prev' src='images/arrow-left.png'>",
  nextArrow:
    "<img class='a-right control-c next slick-next' src='images/arrow-right.png'>",
});

$(document).on("click", ".dropdown-menu", function (e) {
  e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
  $(".dropdown-menu a").click(function (e) {
    e.preventDefault();
    if ($(this).next(".submenu").length) {
      $(this).next(".submenu").toggle();
    }
    $(".dropdown").on("hide.bs.dropdown", function () {
      $(this).find(".submenu").hide();
    });
  });
}
