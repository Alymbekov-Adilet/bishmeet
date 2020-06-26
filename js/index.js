//modal
$(".gamburger_img").on("click", function () {
  $(".modal_gamburger").slideDown("slow");
  $(".gamburger_menu_mobile").css({ display: "none" });
});

$(".close").on("click", function () {
  $(".modal_gamburger").slideUp("slow");
  $(".gamburger_menu_mobile").css({ display: "flex" });
});

//carousel-1
$(document).ready(function () {
  $(".first").owlCarousel({
    items: 3,
    loop: true,
    autoWidth: true,
    nav: true,
  });
  $(".second").owlCarousel({
    items: 4,
    loop: true,
    autoWidth: true,
    nav: true,
  });
  $(".third").owlCarousel({
    items: 4,
    loop: true,
    autoWidth: true,
    margin: 3,
  });
  $(".fourth").owlCarousel({
    items: 3,
    loop: true,
    autoWidth: true,
    margin: 3,
  });
  $(".fifth").owlCarousel({
    items: 3,
    loop: true,
    autoWidth: true,
    margin: 3,
  });
  $(".sixth").owlCarousel({
    items: 3,
    loop: true,
    autoWidth: true,
    margin: 3,
  });
  $(".owl-item img").css({
    width: "50%",
    marginLeft: "60px",
  });

  $(".owl-prev").css({
    position: "absolute",
    left: "-1%",
    top: "30%",
    fontSize: "30px",
    background: "#3b4bdb",
    width: "30px",
  });
  $(".owl-next").css({
    position: "absolute",
    right: "-1%",
    top: "30%",
    fontSize: "30px",
    background: "#3b4bdb",
    width: "30px",
  });
});

