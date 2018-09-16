let data = $.ajax("../data.json").done(function() {
  data = JSON.parse(data.responseText);
  data = data.data;

  for (let i = 0; i < data.length; i++) {
    let div = $("<div>").addClass("table")
      .attr("id", data[i][0]);
    //console.log(div.get(0));
    let th = $("<div>").addClass("table-header")
      .html(data[i][1]);
    //console.log(th.get(0));
    div.append(th);
    let ol = $("<ol>");
    for (let j = 0; j < data[i][2].length; j++) {
      let t = data[i][2][j];
      let li = $("<li>");

      for (let k = 0; k < t[0].length; k++) {
        $("<a>").html(t[1][k] + " ")
          .attr({
            "href": t[0][k],
            "target": "_blank"
          })
          .appendTo(li);
      }
      li.appendTo(ol);
    }
    ol.appendTo(div);
    div.appendTo($("#table-wrapper"));
  }

  let autovl = $("#for-newbie").find("li").get(0);
  autovl.innerHTML = "Как отменить автовложение: " + autovl.innerHTML;
  // <div class="password">
  //   <input type="text" value="242104" class="password">
  //   <button class="password">Копировать</button>
  // </div>
  vals = [
    "242104",
    "рекрутинг",
    "новичок"
  ]
  let passs = $("#rus-site li");
  for (let i = 0; i < passs.length; i++) {
    let div = $("<div>")
      .addClass("password");
    $('<input type="text" value="' + vals[i] + '" class="password">')
      .click(function(e) {
        e.preventDefault();
        this.select();
        document.execCommand("copy");
        alert("Пароль скопирован!");
      })
      .appendTo(div);
    $(passs[i]).append(div);
  }
  setup();
})
