var allTextLines;
var data;
var lines;
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "text.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    allTextLines = allText.split(/\r\n|\n/);
    headers = allTextLines[0].split(',');
    lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        data = allTextLines[i].split(',');
        $("ol").append(
          $('<li><a target="_blank" href="' + data[2] + '">'
          + data[1] + '</a></li>'));
        }
}
