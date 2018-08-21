$(document).ready(function() {

  var copyToClipboard = function(e) {
    e.preventDefault();
    var copyText = e.target.previousSibling.previousSibling;

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");
  };

  $("div button.password")
    .click(copyToClipboard);

  $("input.password")
    .height("20px")
    .css("font-style","italic");


  $(".table-header").css({"text-align": "center",
  "background-color": "rgb(255, 190, 30)",
  "font-size": "140%", "padding": "3.5%",
  "border-radius": "17px 17px 0 0",
  "border-bottom": "1px solid black"});

  // $("a:link").css("text-decoration", "");
});
