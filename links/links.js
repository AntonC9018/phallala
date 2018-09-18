$(document).ready(function() {



  // $("a:link").css("text-decoration", "");
});

function setup() {
  // var copyToClipboard = function(e) {
  //   e.preventDefault();
  //   var copyText = e.target.previousSibling.previousSibling;
  //
  //   /* Select the text field */
  //   copyText.select();
  //
  //   /* Copy the text inside the text field */
  //   document.execCommand("copy");
  // };

  // $("div button.password")
  //   .click(copyToClipboard);

  $("input.password")
    .height("20px")
    .css("font-style", "italic");


  $(".table-header").css({
    "text-align": "center",
    "background-color": "rgb(255, 190, 30)",
    "font-size": "140%",
    "padding": "3.5%",
    "border-radius": "17px 17px 0 0",
    "border-bottom": "1px solid black"
  });
  console.log("here")
  $("body").click(() => $(".iframe").remove())

  $("#g-drive ol")
    .append($("<li>")
      .click((e) => eventClick('https://docs.google.com/document/d/e/2PACX-1vTzWn28zMvO4FYFjqxmfZ7h5cJbq9sbyIRdviGhqPjTWgJt8bsvMnfSOGobfUSyTJIa7FkuJDmQkP7m/pub?embedded=true', e))
      .append($("<a>")
        .html("Доставка ПМР")
        .attr("href", "#.iframe")))
    .append($("<li>")
      .click((e) => eventClick('https://docs.google.com/spreadsheets/d/e/2PACX-1vRlZcefwZpSp0ZovIGfH_fUplQlKUz2w5ETVrA6pAI8TGVCu8DqbWsUjWACDyYVJdVNUYzgSvmHpSg_/pubhtml?widget=true&amp;headers=false', e))
      .append($("<a>")
        .html("INFO SPO MD")
        .attr("href", "#.iframe")));
}


function eventClick(s, e) {
  e.stopPropagation();
  let click = $('<iframe src="' + s + '"></iframe>')
    .css({
      "position": "fixed",
      "top": "20px",
      "left": "10px",
      "width": "80%",
      "height": "80%"
    }).addClass("iframe");
  $("body").append(click);
}
