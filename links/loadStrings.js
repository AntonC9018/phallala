$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "./text.csv",
    dataType: "text",
    success: function(data) {processData(data);}
  });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);

  for (var i=1; i<allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    if (data.length === 1) break;
    $(data[0]+" ol").append(
      $('<li><a target="_blank" href="' + data[2] + '">'
      + data[1] + '</a></li>'));
    }
  $("ol:not(:has(*))")
  .parent()
  .filter(".table")
  .hide();
}
