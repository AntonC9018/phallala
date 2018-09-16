
console.log("in");
function save() {
  console.log("in");
}

$(document).ready(function() {
  var u = $("#table-wrapper div").not(".table-header").not(".password");
  let a = [];
  $.each(u, function(index) {
    let ls = [];
    let lis = $(this).find("li");
    $.each(lis, function() {
      let as = $(this).find("a");
      let links = [];
      let atext = [];
      for (let i = 0; i < as.length; i++) {
        atext.push(remSpaces(as[i].innerHTML).trim());
        links.push(as[i].href);
      }
      ls.push([links, atext]);
    })
    a.push([this.id, remSpaces($(this).find(".table-header").get(0).innerHTML).trim(), ls]);
  })
  let data = {
    data: a
  };
  //$("*").hide();
  $("body").append($("<p>").html(JSON.stringify(data, null, 2)));
})

function remSpaces(s) {
  return s.replace(/\s{2, }/g, "");
}
