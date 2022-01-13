$(document).ready(function () {
  $(".video__btn").on("click", function () {
    $(".video__modal-canvas").addClass("active");
  });
  $(".video__modal-close").on("click", function () {
    $(".video__modal-canvas").removeClass("active");
  });
});
