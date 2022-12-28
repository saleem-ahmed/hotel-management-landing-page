$(document).ready(function () {
  if ($(".bbb_viewed_slider").length) {
    var viewedSlider = $(".bbb_viewed_slider");

    viewedSlider.owlCarousel({
      loop: true,
      // margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      nav: false,
      dots: true,
      paginationSpeed: 300,
	rewindSpeed: 400,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1199: {
          items: 3,
        },
      },
    });

    if ($(".bbb_viewed_prev").length) {
      var prev = $(".bbb_viewed_prev");
      prev.on("click", function () {
        viewedSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".bbb_viewed_next").length) {
      var next = $(".bbb_viewed_next");
      next.on("click", function () {
        viewedSlider.trigger("next.owl.carousel");
      });
    }
  }
});
