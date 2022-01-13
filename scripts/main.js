let secondLine = document.querySelector(".second-line");

window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  if (scrollPos > 100) {
    secondLine.classList.add("header__fix");
  } else {
    secondLine.classList.remove("header__fix");
  }
});

$(document).ready(function () {
  $(".footer__button").on("click", function () {
    $(".modal").removeClass("hidden");
  });
  $(".modal__close").on("click", function () {
    $(".modal").addClass("hidden");
  });
});

$(document).ready(function () {
  $(".header__burger").on("click", function () {
    $(".burger-modal").addClass("active");
  });
  $(".burger-modal__close").on("click", function () {
    $(".burger-modal").removeClass("active");
  });
});
