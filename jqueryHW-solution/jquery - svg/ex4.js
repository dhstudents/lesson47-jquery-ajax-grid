
var x = "";
var y = "";
var rect = "";

$(function () {


  $("rect").on("mousedown", function () {
    rect = $(this);
  });

  $(window).on("mousedown mousemove", function (e) {
    x = e.offsetX;
    y = e.offsetY;
    rect.attr("x", x);
    rect.attr("y", y);
    $(this).on("mouseup", function (e) {
      $(this).off("mousemove");
    })

  });


})