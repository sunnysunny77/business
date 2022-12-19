$(document).ready(function () {
  $("#menu").click(function () {
    [...document.getElementsByClassName("button")].forEach((button) => { button.classList.toggle("display") });
    document.getElementById("nav").classList.toggle("ani");
  })
  $(".slk").slick({
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});