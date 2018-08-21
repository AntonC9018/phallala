$(document).ready(function() {
  $("#inside-topbar span").not(".topbar-cur")
    .mouseenter(function() {
      $(this).css("backgroundColor", "rgb(35, 7, 75)");
    })
    .mouseleave(function() {
      $(this).css("backgroundColor", "unset")
    });

  $(".topbar-cur").css("backgroundColor", "rgb(58, 183, 66)");
});
