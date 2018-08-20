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
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        $(data[0]).append(
          $('<li><a target="_blank" href="' + data[2] + '">'
          + data[1] + '</a></li>'));
        }
}
