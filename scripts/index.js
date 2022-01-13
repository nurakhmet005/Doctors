$(document).ready(function () {
  $(".btn").on("click", function () {
    $(".modal").addClass("active");
  });
  $(".modal__close").on("click", function () {
    $(".modal").removeClass("active");
  });
});
